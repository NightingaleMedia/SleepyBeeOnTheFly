import React, { useState } from "react"

import { Button } from "react-bootstrap"
import Layout from "../components/layout"

import Splash from "../components/Landing/splash"
import Banner from "../components/Landing/Banner"
import Main from "../components/Landing/Main"
import InstaGrid from "../components/InstaGrid"

const IndexPage = props => {
  const [mainHeight, setMainHeight] = useState(25)

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <Banner>
        In the wrong place? Looking for
        <Button
          size="sm"
          variant="outline-dark"
          onClick={() => {
            window.location.href = "https://www.sleepybeecafe.com/"
          }}
        >
          Sleepy Bee Cafe
        </Button>{" "}
        ?
      </Banner>
      <Splash />

      <Main mainHeight={mainHeight} />
      <InstaGrid />
    </Layout>
  )
}

export default IndexPage
