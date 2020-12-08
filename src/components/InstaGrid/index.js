import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import "./insta.css"
import { Container, Row, Col } from "react-bootstrap"

const InstaImg = styled(Img)``
const InstaGrid = props => {
  const { allInstaNode } = useStaticQuery(
    graphql`
      query {
        allInstaNode(limit: 9, sort: { fields: timestamp, order: DESC }) {
          edges {
            node {
              id
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              caption
            }
          }
        }
      }
    `
  )
  return (
    <section>
      <Container style={{ maxWidth: "1200px" }}>
        <Row>
          <Col md={12}>
            <center>
              <h2> Recent Posts </h2>
              <hr />
            </center>
          </Col>
          {allInstaNode.edges.map(img => (
            <Col lg={4}>
              <Img
                key={img.node.id}
                style={{ borderRadius: "3px" }}
                className="insta-image"
                placeholderClassName="loading-insta"
                fluid={img.node.localFile.childImageSharp.fluid}
              />

              {/* <p className="insta-caption">
                {img.node.caption.slice(0, 100)}...
              </p> */}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

InstaGrid.propTypes = {}

export default InstaGrid
