import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const BannerWrap = styled.div`
  height: 100vh;
  margin-bottom: -100vh;
`

const Banner = styled.div`
  position: sticky;
  text-align: center;
  padding-top: 15px;
  top: -1px;
  width: 100%;
  height: 50px;
  margin-bottom: 70vh;
  font-size: 90%;
  line-height: auto;
  color: white;
  font-family: Foco;
  background-color: var(--blueash-dark);
  z-index: 100;
  Button {
    margin-left: 1em;
    margin-right: 1em;
    padding: 6px;
    font-size: 70%;
    font-weight: 800;
    color: white;
    border: 0px solid white;
    background-color: #181818;
    color: var(--sb-yellow--med);
    cursor: pointer;
  }
  && span {
    /* color: black; */
    font-weight: 600;
    margin-left: 6px;
    margin-right: 6px;
  }
  && span.u {
    text-decoration: underline;
  }
  @media all and (max-width: 1024px) {
    padding: 10px;
    text-align: center;
    height: 80px;
    font-size: 0.75rem;
  }
`

export default props => (
  <BannerWrap>
    <Banner>{props.children}</Banner>
  </BannerWrap>
)
