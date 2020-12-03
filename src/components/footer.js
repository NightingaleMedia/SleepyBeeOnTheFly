import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Link from "gatsby"

const Footer = styled.div`
  width: 100vw;

  bottom: 0;
  height: 40vh;
  background-color: var(--sb-grey);
  z-index: 2;
  color: white;
  padding: 3rem;
  font-size: 80%;
  @media all and (max-width: 700px) {
    text-align: center;
  }
`

export default () => (
  <Footer>
    3440 Burnet Ave, Suite 100 <br />
    Cincinnati, OH 45229 <br />
    <strong> 513-221-1307</strong>
    <br />
    From Your Friends at{" "}
    <a
      style={{ color: "white", textDecoration: "underline" }}
      href="https://www.sleepybeecafe.com/"
    >
      Sleepy Bee Cafe
    </a>
  </Footer>
)
