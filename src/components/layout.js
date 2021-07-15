/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Footer from "./Footer"
import "./bootstrap.min.css"
import "./normalize.css"
import "./global.css"
import { Helmet } from "react-helmet"
import { GlobalStyle } from "../utils/styles"

const Wrap = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100vw;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <script src="https://apis.google.com/js/api.js"></script>
      </Helmet>

      <Header
        siteTitle={data.site.siteMetadata?.title || `Sleepy Bee On The Fly`}
      />
      <GlobalStyle />

      {children}
      {/* <Footer /> */}
    </>
  )
}

export default Layout
