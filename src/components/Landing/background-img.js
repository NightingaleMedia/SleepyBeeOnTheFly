import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Bg = props => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "main-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      className={props.className}
    ></Img>
  )
}

const BackgroundImage = styled(Bg)`
  position: absolute;

  height: 100vh;
  z-index: 99;
`

export default BackgroundImage
