import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

import BackgroundImage from "./background-img"

const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  transition: height 0.2s ease;
  background-color: rgba(5, 100, 180, 0.85);
  overflow: hidden;
  z-index: 100;
  position: absolute;
  padding: 2em;
  color: white;
  h2 {
    font-size: 2em;
  }
  .main-inner {
    max-width: 45%;
  }
  @media all and (max-width: 900px) {
    padding: 50px;
    div.main-inner {
      max-width: 100%;
    }
    h2 {
      font-size: 50px;
    }
    p {
      font-size: 24px;
    }
  }
`

export default props => (
  <>
    <MainDiv mainHeight={props.mainHeight}>
      <div className="main-inner">
        <h2>On The Fly, Now Taking Orders!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <iframe
        width="600"
        height="450"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ5RKvelCxQYgRhc0aKYQLyGM&key=AIzaSyD_xrL9e1VO7FrrfjDEXKrIRM0IYUxO4qo"
        allowfullscreen
      />
    </MainDiv>
    <BackgroundImage></BackgroundImage>
  </>
)
