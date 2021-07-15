import React, { useState } from "react"
import { Button } from "react-bootstrap"
import Layout from "../components/layout"
import Splash from "../components/Landing/splash"
import Banner from "../components/Landing/banner"
import Main from "../components/Landing/main"
import InstaGrid from "../components/InstaGrid"
import Loading from "../components/Loading"

const IndexPage = props => {
  const [mainHeight, setMainHeight] = useState(25)
  const [loading, setLoading] = useState({
    loading: true,
    message: "loading....",
  })

  const changeLoading = value => {
    console.log("still loading...")
    const loading = { ...loading }
    loading.loading = value
    setLoading(loading)
  }

  return (
    <Layout>
      {loading.loading ? <Loading message={loading.message}></Loading> : ""}
      <>
        <Banner>
          Sleepy Bee "On The Fly" is closed. But we invite you check out our
          other locations
          <span className="u">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.sleepybeecafe.com"
            >
              {" "}
              here
            </a>{" "}
          </span>
        </Banner>
        <Splash changeLoading={changeLoading} />

        {/* <InstaGrid /> */}
      </>
    </Layout>
  )
}

export default IndexPage
