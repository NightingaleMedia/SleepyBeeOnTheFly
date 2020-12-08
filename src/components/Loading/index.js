import React from "react"
import PropTypes from "prop-types"
import justBee from "../../images/just-bee.png"
import "./loading.css"
const Loading = ({ message, children }) => {
  return (
    <div class="preloader">
      <img className="loading-message" src={justBee}></img>
      <p>{message}</p>
      {children}
    </div>
  )
}

Loading.propTypes = {}

export default Loading
