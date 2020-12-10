import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { Col, Container, Row } from "react-bootstrap"
import BackgroundImage from "./background-img"

const MainDiv = styled.div`
  width: 100%;
  transition: height 0.2s ease;
  background-color: var(--sb-blue--dark);

  z-index: 100;
  position: relative;
  padding: 6rem;
  color: white;

  .main-inner {
    max-width: 100%;
    margin-top: 4rem;
  }
  @media all and (max-width: 900px) {
    height: auto;

    padding: 30px;
    div.main-inner {
      max-width: 100%;
    }
    h2 {
      font-size: 180%;
    }
    p {
      font-size: 120%;
    }
  }
`

export default props => (
  <>
    <MainDiv mainHeight={props.mainHeight} id="about">
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="main-inner">
              <h2 className="white">
                On The Fly, Now Taking Carry Out & Delivery Orders!
              </h2>
              <p>
                Sleepy Bee On The Fly is a breakfast and lunch restaurant
                uniting quality, flavor and speed. Like the Sleepy Bee Cafe, On
                The Fly features fresh, healthy, locally sourced ingredients
                made-to-order for grab and go, delivery, or to sit and savor for
                a few precious minutes – whatever suits your busy, buzzy lives.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="main-inner">
              <iframe
                title="google-maps-sleepybeeonthefly"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ border: "0" }}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD_xrL9e1VO7FrrfjDEXKrIRM0IYUxO4qo
    &q=Sleepy+bee+on+the+fly,Cincinnati+OH"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </MainDiv>
    <BackgroundImage></BackgroundImage>
  </>
)
