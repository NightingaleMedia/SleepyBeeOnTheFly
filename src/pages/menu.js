/* global gapi */
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Loading from "../components/Loading"
import Menu from "../components/Menu/"
import logo from "../images/logo-landing.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"

import { navigate } from "gatsby"
import "../components/Menu/style.css"

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

  useEffect(() => {
    const interval = setTimeout(() => {
      setLoading(false)
    }, 1200)
    document.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        collapseMenu()
      }
    })
    return () => {
      clearInterval(interval)
      document.removeEventListener("scroll", this)
    }
  }, [])

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
            <h1 style={{ fontSize: "2.25rem" }}>Our Menu</h1>
            <span className="scroll-down" onClick={() => scrollAndOpen()}>
              <FontAwesomeIcon className="pulse" icon={faChevronCircleDown} />
            </span>
          </div>
          <Wrap>
            <Menu
              expandHeader={() => expandHeader()}
              collapseHeader={() => collapseMenu()}
              loading={loading}
            ></Menu>
          </Wrap>
        </>
      )}
    </Layout>
  )
}

MenuPage.propTypes = {}

export default MenuPage
