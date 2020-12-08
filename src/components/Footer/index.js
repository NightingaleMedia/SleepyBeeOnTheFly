import React from "react"
import { Link, navigate } from "gatsby"
import "./footer.css"
import styled from "styled-components"
import Image from "../Images"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons"
const FooterLink = styled(Link)`
  text-decoration: none;
  position: relative;
  display: block;
  color: white;
  font-size: 24px;
  font-family: var(--sb-font-foco);
  height: 40px;
  margin-bottom: 0.8rem;
  display: flex;
  z-index: 98;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer !important;
  &&:hover {
    text-decoration: none;
    color: white;
    opacity: 0.95;
  }
  span {
    width: 0px;
    bottom: 0;
    display: block;
    position: absolute;
    height: 3px;
    background-color: var(--sb-yellow--med);
    transition: all 0.2s;
    bottom: 0px;
  }
  &&:hover > span {
    width: 100px;
  }
`

const FooterLink2 = styled.a`
  text-decoration: none;
  position: relative;
  display: block;
  color: white !important;
  font-size: 24px;
  font-family: var(--sb-font-foco);
  height: 40px;
  margin-bottom: 0.8rem;
  display: flex;
  z-index: 98;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer !important;
  &&::visited {
    color: white;
  }
  &&:hover {
    text-decoration: none;
    color: white;
    opacity: 0.95;
  }
  span {
    width: 0px;
    bottom: 0;
    display: block;
    position: absolute;
    height: 3px;
    background-color: var(--sb-yellow--med);
    transition: all 0.2s;
    bottom: 0px;
  }
  &&:hover > span {
    width: 100px;
  }
`
const MyFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
  margin-right: 1rem;
`
const Footer = () => {
  return (
    <footer>
      <div className="footer--top">
        <div>
          <FooterLink className="footer-link" to="#about">
            About Us
            <span></span>
          </FooterLink>
          <FooterLink2
            className="footer-link"
            href="mailto:info@sleepybeecafe.com"
            target="_blank"
          >
            Contact Us
            <span></span>
          </FooterLink2>
          <FooterLink className="footer-link" to="/menu">
            Our Menu
            <span></span>
          </FooterLink>
        </div>
        <div>
          {/* <h4>How To Project Videos</h4> */}
          <FooterLink2
            className="footer-link"
            to="https://www.sleepybeecafe.com/jobs"
          >
            Employment
            <span></span>
          </FooterLink2>
          <FooterLink2
            className="footer-link"
            to="https://www.google.com/maps?ll=39.1435,-84.499686&z=17&t=m&hl=en-US&gl=US&mapclient=embed&daddr=Sleepy+Bee+On+The+Fly+3440+Burnet+Ave+Cincinnati,+OH+45229@39.1435003,-84.4996864"
          >
            Directions
            <span></span>
          </FooterLink2>
        </div>
        <div className="sb-link">
          <div>
            <FooterLink to="/">
              <div style={{ width: "100px", margin: "auto" }}>
                <Image fileName="just-bee.png" />
              </div>
              <p style={{ fontSize: "1rem", textAlign: "center" }}>
                From your friends <br />
                at Sleepy Bee
              </p>
            </FooterLink>
          </div>
        </div>
      </div>
      <div className="footer--bottom">
        <div className="footer--end">
          <MyFontAwesomeIcon
            onClick={() => navigate("https://www.facebook.com/glassroom.us")}
            icon={faFacebookSquare}
          />

          <MyFontAwesomeIcon
            onClick={() =>
              navigate("https://www.instagram.com/glassroomart.us/")
            }
            icon={faInstagramSquare}
          />
          <a href="mailto:info@glassroomart.com" target="_blank">
            <MyFontAwesomeIcon icon={faEnvelope}></MyFontAwesomeIcon>
          </a>
        </div>
        <div className="footer--end terms-section">
          <Link style={{ color: "white" }} to="/terms-and-conditions">
            Terms & Conditions{"  "}
          </Link>
          |
          <Link style={{ color: "white" }} to="/privacy-policy">
            {"  "}Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
