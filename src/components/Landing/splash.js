import { Link, navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import { Button, Col } from "react-bootstrap"
import styled from "styled-components"
import LandingLogo from "./landingLogo"
import bg from "../../images/splash-desktop.png"
import banner from "./banner"
const SplashPage = styled.div`
  background-image: url(${bg});
  background-position: center center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 1;
  align-items: center;
  background-color: white;
  /* background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23f2f2f2' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E"); */
  z-index: 0;

  .logo-holder {
    width: 100%;
    margin: 0 auto;
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

const ButtonHolder = styled.div`
  max-width: 400px;
  min-width: 400px;
  z-index: 201;
  max-height: 60px;
  display: flex;
  position: static;
  bottom: 50%;
  justify-content: space-around;
  transition: all 0.2s ease;
  &&.after-scroll {
    top: 0%;
    max-height: 80px;
    position: fixed;
    margin-top: 0;
    min-width: 100%;
    z-index: 101;
    box-shadow: 0px 0px 20px 0px #181818;
    && Button {
      /* chnage this for the scroll */
      width: 80%;
      border-radius: 0;
      height: 80px;
    }
  }
  @media all and (max-width: 700px) {
    height: 20%;
    min-width: 100%;
    margin-top: 2em;
  }
  Button {
    background-color: var(--sb-blue--dark);
    height: 50px;
    min-width: 35%;
    cursor: pointer;
  }
  Button:nth-of-type(1) {
    background-color: var(--sb-blue--dark);
    border: none;
    transition: opacity 0.2s;
    :hover {
      opacity: 0.98;
    }
  }
  Button:nth-of-type(2) {
    background-color: #181818;
    border: none;
    transition: opacity 0.2s;
    :hover {
      opacity: 0.8;
    }
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
      <div className="logo-holder">
        <LandingLogo top={laxTop} onLoad={() => props.changeLoading(false)} />
      </div>
      <ButtonHolder className={fixedNav ? "after-scroll" : ""}>
        <Button
          onClick={() => {
            window.location.href = "https://onthefly.hrpos.heartland.us/"
          }}
        >
          Order Online{" "}
        </Button>

        <Button
          onClick={() => {
            navigate("/menu")
          }}
        >
          Our Menu
        </Button>
      </ButtonHolder>
      <div className="splash-under">
        <p style={{ lineHeight: "30px" }}>
          3440 Burnet Ave, Ste 100 <br />
          Cincinnati, OH 45229 <br />
          <strong>(513) 221-1307 </strong>
          <br />
          Tue - Sun : 8:00am - 2:00pm
        </p>
      </div>
    </SplashPage>
  )
}

Splash.propTypes = {}

export default Splash
