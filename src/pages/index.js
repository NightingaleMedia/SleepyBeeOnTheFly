import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Splash from "../components/Landing/splash"
import Banner from "../components/Landing/Banner"
import Main from "../components/Landing/Main"

const IndexPage = props => {
  const [mainHeight, setMainHeight] = useState(25)

  return (
    <Layout>
      <SEO title="Home" />
      <Banner>
        In the wrong place? Looking for
        <Button size="sm" variant="outline-dark">
          Sleepy Bee Cafe
        </Button>{" "}
        ?
      </Banner>
      <Splash />
      <Main mainHeight={mainHeight} />
    </Layout>
  )
}

export default IndexPage
