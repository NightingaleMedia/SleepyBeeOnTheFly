import React from "react"
import styled from "styled-components"
import LandingLogo from "./landingLogo"

const MyLetter = styled.div`
  background-color: white;
  max-width: 650px;
  margin: 2rem auto;
  box-shadow: 0px 0px 20px -16px black;
  padding: 2.5rem;
  font-size: 1.15rem;
  font-family: var(--sb-font1);
  font-weight: 800;
  text-align: center;
  z-index: 99;
`
const LogoHolder = styled.div`
  max-width: 350px;
  margin: auto;
`
const Letter = () => {
  return (
    <MyLetter>
      <LogoHolder>
        <LandingLogo />
      </LogoHolder>
      Dear Sleepy Bee "On The Fly" guests,
      <br />
      <br />
      It is with a heavy heart that we are closing "On The Fly."
      <br /> We are grateful for your support and patronage this past year. It
      has been an adventure and we are very fortunate to have had the chance to
      meet you all. <br />
      The Bee team that has been flipping pancakes and whipping up lattes, is
      migrating 4 miles to the Downtown Sleepy Bee location. Come visit and say
      hello! <br /> <br /> It has been lovely getting to know all of you and
      your favorite scrambles. <br /> <br /> Thank you again for all of your
      visits.
      <br />
      <br />
      With Love,
      <br />
      The Bees
      <br />
      <br />
      <i>
        Our other three cafe locations will remain open and we would like to
        invite you to try them out:
      </i>
      <a href="https://sleepybeecafe.com/">
        <button>Take Me There</button>
      </a>
    </MyLetter>
  )
}

export default Letter
