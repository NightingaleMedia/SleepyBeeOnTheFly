/* global gapi */
import React, { useEffect, useRef, useState } from "react"
import { readString } from "react-papaparse"
import styled from "styled-components"
import Layout from "../components/layout"
import Loading from "../components/Loading"
import Menu from "../components/Menu/"
import config from "../components/Menu/config"
import logo from "../images/logo-landing.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"
import { getCarryOut, getDrinks, load, mapItems } from "../utils/spreadsheet"
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
  const [data, setData] = useState({
    Carryout: [],
    Drinks: [],
    bothSectionsClosed: false,
    headerExpanded: true,
  })

  const setMenuData = data => {
    console.log(data)
  }

  const expandHeader = () => {
    setData(prev => {
      return { ...prev, headerExpanded: true }
    })
  }
  const collapseMenu = () => {
    setData(prev => {
      return { ...prev, headerExpanded: false }
    })
  }

  const setBothSectionsClosed = bool => {
    setData(prev => {
      return { ...prev, bothSectionsClosed: bool }
    })
  }
  const onLoad = (packet, error, callback) => {
    console.log("onload ", packet)
    let new_data = data
    if (!packet) {
      console.log("error", error)
      setLoading({ loading: true, message: "failed to load" })
    } else {
      new_data[packet.section] = mapItems(packet)
      setData({ ...data, ...new_data })
    }
  }

  useEffect(() => {
    setLoading({ loading: true, message: "getting menu data..." })
    gapi.load("client:auth2", () => {
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
    })
  }, [])

  useEffect(() => {
    if (data.Drinks.length > 0 && data.Carryout.length > 0) {
      setLoading({ loading: false, message: "" })
    }
  }, [data.Drinks, data.Carryout])

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        collapseMenu()
      }
    })
    return () => {
      document.removeEventListener("scroll", this)
    }
  }, [])

  // function handleAuthClick(event) {
  //   gapi.auth2.getAuthInstance().signIn()
  // }
  const scrollAndOpen = () => {
    collapseMenu(true)
    const new_data = { ...data }
    new_data.Carryout.sectionOpen = true
    // setData(prev => {
    //   return { ...prev, [data.Carryout.sectionOpen]: true }
    // })
  }
  return (
    <Layout>
      {loading.loading ? (
        <Loading message={loading.message} />
      ) : (
        <>
          <div
            className={`menu--header ${
              data.headerExpanded ? "" : "menu-collapsed"
            }`}
          >
            <img
              style={{ cursor: "pointer" }}
              src={logo}
              alt="logo"
              className="menu-logo"
              onClick={() => navigate("/")}
            />
            <h1>Our Menu</h1>
            <span className="scroll-down" onClick={() => scrollAndOpen()}>
              <FontAwesomeIcon className="pulse" icon={faChevronCircleDown} />
            </span>
          </div>
          <Wrap>
            <Menu
              expandHeader={() => expandHeader()}
              collapseHeader={() => collapseMenu()}
              loading={loading}
              data={data}
            ></Menu>
          </Wrap>
        </>
      )}
    </Layout>
  )
}

MenuPage.propTypes = {}

export default MenuPage
