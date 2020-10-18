import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Footer = styled.div`
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
  </Footer>
)
