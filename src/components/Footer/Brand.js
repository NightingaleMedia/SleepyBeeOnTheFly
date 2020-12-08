import React from "react"
const Brand = props => {
  const date = new Date()

  return (
    <div
      style={{
        width: "100%",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        color: "var(--gr-grey)",
      }}
    >
      <p style={{ marginBottom: "0" }}>
        {" "}
        Designed and Built by Aggregate Media {date.getFullYear()}
      </p>
    </div>
  )
}

export default Brand
