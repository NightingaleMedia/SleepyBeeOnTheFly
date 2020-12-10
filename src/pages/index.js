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
    message: "loading...",
  })

  const changeLoading = value => {
    console.log("changing loading")
    const loading = { ...loading }
    loading.loading = value
    setLoading(loading)
  }

  return (
    <Layout>
      {loading.loading ? <Loading message={loading.message}></Loading> : ""}
      <>
        <Splash changeLoading={changeLoading} />
        <Main mainHeight={mainHeight} />
        <InstaGrid />
      </>
    </Layout>
  )
}

export default IndexPage
