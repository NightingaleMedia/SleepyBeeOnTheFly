import { Link, navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import { Button, Col } from "react-bootstrap"
import styled from "styled-components"
import LandingLogo from "./landingLogo"
import bg from "../../images/splash-desktop.png"
import Letter from "./Letter"
const SplashPage = styled.div`
  background-image: url(${bg});
  background-position: center center;
  min-height: 100vh;
  opacity: 1;
  padding: 3rem 0;
  background-color: white;
  background-attachment: fixed;
  /* background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23f2f2f2' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E"); */
  z-index: 0;

  .logo-holder {
    width: 100%;
    max-width: 350px;
    z-index: 0;
    margin: 3rem auto;
  }
  .splash-under {
    text-align: center;
    font-size: 0.65em;
    margin-top: 2em;
    z-index: 1;
  }
  &&:hover > .triangle1 {
    transform: rotate(24deg) translate(500px, -100px);
  }

  &&:hover > .triangle2 {
    transform: rotate(24deg) translate(-500px, 100px);
  }
  Button {
    background-color: var(--blueash-dark);
  }
`

const Splash = props => {
  const [laxTop, setLaxTop] = useState(0)
  const [fixedNav, setFixedNav] = useState(false)
  const handleLax = e => {
    let result = window.pageYOffset / 1.2 - 50
    setLaxTop(result)
  }
  const handleFixedNav = e => {
    if (window.pageYOffset > (window.innerHeight + 100) / 2) {
      setFixedNav(true)
    } else setFixedNav(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleLax()
      handleFixedNav()
    })
    return () => window.removeEventListener("scroll", handleLax)
  }, [])
  return (
    <SplashPage>
      <Letter />
    </SplashPage>
  )
}

Splash.propTypes = {}

export default Splash
