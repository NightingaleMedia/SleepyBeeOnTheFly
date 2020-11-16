import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./insta.css"
import { Container, Row, Col } from "react-bootstrap"

const InstaGrid = props => {
  const { allInstaNode } = useStaticQuery(
    graphql`
      query {
        allInstaNode(limit: 9, sort: { fields: timestamp, order: DESC }) {
          edges {
            node {
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
                style={{ borderRadius: "3px" }}
                className="insta-image"
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
