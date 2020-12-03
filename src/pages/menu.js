/* global gapi */
import React, { createRef, useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "styled-components"
import Layout from "../components/layout"
import Menu from "../components/Menu/"
import config from "../components/Menu/config"
import LandingLogo from "../components/Landing/landingLogo"
import logo from "../images/logo-landing.png"
import justBee from "../images/just-bee.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronDown,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons"
import { getCarryOut, getDrinks, load } from "../utils/spreadsheet"
import { gapi } from "gapi-script"
import { navigate } from "gatsby"

const Wrap = styled.div`
  min-height: 100vh;
`
const MenuPage = props => {
  const [loading, setLoading] = useState({
    loading: true,
    message: "loading items",
  })
  const [data, setData] = useState({ Drinks: [], Carryout: [] })
  const [collapsed, collapseMenu] = useState(false)

  const onLoad = (packet, error) => {
    setLoading({ loading: true, message: "building the menu..." })
    const new_data = { ...data }
    if (!packet) {
      console.log("error", error)
      setLoading({ loading: true, message: "failed to load" })
    } else {
      let menuMap = []

      packet.data.map(item => {
        if (item[0] !== "") {
          menuMap.push({
            section: packet.section || "",
            type: "title",
            title: item[0] || "item title",
            description: item[3] || "",
          })
        } else if (item[6] === "TRUE") {
          menuMap.push({
            section: packet.section || "",
            type: "item",
            title: item[1] || "",
            dietaryNotes: item[2].split(","),
            description: item[3] || "",
            price: item[4] || "",
            additionalNotes: item[5] || "",
          })
        }
      })
      new_data[packet.section] = menuMap
      setData(data => ({ ...data, ...new_data }))
      setLoading({ loading: false, message: "" })
    }
  }
  const initClient = () => {
    // 2. Initialize the JavaScript client library.
    gapi.client
      .init({
        apiKey: config.apiKey,
        clientId: config.CLIENT_ID,
        discoveryDocs: config.discoveryDocs,
        scope: config.SCOPES,
        // Your API key will be automatically added to the Discovery Document URLs.
      })
      .then(() => {
        // 3. Initialize and make the API request.
        getCarryOut(onLoad)
        getDrinks(onLoad)
      })
  }
  useEffect(() => {
    setLoading({ loading: true, message: "getting menu data..." })
    gapi.load("client:auth2", initClient)
  }, [])

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        collapseMenu(false)
      }
      if (window.scrollY > 0) {
        collapseMenu(true)
      }
    })
    return () => {
      document.removeEventListener("scroll", this)
    }
  })
  const loadingRef = useRef()

  function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn()
  }
  const scrollAndOpen = () => {
    collapseMenu(true)
    const new_data = { ...data }
    new_data.Carryout.sectionOpen = true
    setData(data)
  }
  return (
    <Layout>
      {loading.loading && data !== {} ? (
        <div class="preloader">
          <img className="loading-message" src={justBee}></img>
          <h2 ref={loadingRef}>{loading.message}</h2>
        </div>
      ) : (
        <>
          <div className={`menu--header ${collapsed ? "menu-collapsed" : ""}`}>
            <img
              style={{ cursor: "pointer" }}
              src={logo}
              alt="logo"
              className="menu-logo"
              onClick={() => navigate("/")}
            />
            <span className="scroll-down" onClick={() => scrollAndOpen()}>
              <FontAwesomeIcon className="pulse" icon={faChevronCircleDown} />
            </span>
          </div>
          <Wrap>
            <Menu
              collapseMenu={v => collapseMenu(v)}
              loading={loading}
              data={data}
            ></Menu>
            {/* <button onClick={() => handleAuthClick()}>Sign in</button> */}
          </Wrap>
        </>
      )}
    </Layout>
  )
}

MenuPage.propTypes = {}

export default MenuPage
