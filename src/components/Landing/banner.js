import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const BannerWrap = styled.div`
  height: 100vh;
  margin-bottom: -100vh;
`

const Banner = styled.div`
  position: sticky;
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  top: -1px;
  width: 100%;
  height: 50px;
  margin-bottom: 70vh;
  font-size: 100%;
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
`

export default props => (
  <BannerWrap>
    <Banner>{props.children}</Banner>
  </BannerWrap>
)
