import React from "react"
import PropTypes from "prop-types"

const CarryOut = ({ data, open, toggleOpen }) => {
  return (
    <div
      className={`section--dinein menu-section  ${open ? "open" : "mini-menu"}`}
    >
      <div className="section--header" onClick={() => toggleOpen()}>
        Dine In & Carry Out
        <span>+</span>
      </div>
      <div className="section--menucontent section--breakfast-favorites">
        {data.map(item => {
          if (item.type === "title") {
            return (
              <React.Fragment key={item.title}>
                <div className="menu-content--header">{item.title}</div>
                <div className="menu-content--header-description">
                  {item.description}
                </div>
              </React.Fragment>
            )
          } else {
            return (
              <article key={`menu-item--${item.title}`}>
                <div className="menu-item--title">
                  {item.title}
                  {item.dietaryNotes.map(note => (
                    <span
                      key={`menu-note--${item.title}-${note}`}
                      className={`${note.toLowerCase()}`}
                    ></span>
                  ))}
                </div>
                <div className="menu-item--description">{item.description}</div>
                <div className="menu-item--price"> {item.price}</div>
                <div className="menu-item--notes">{item.additionalNotes}</div>
              </article>
            )
          }
        })}
      </div>
    </div>
  )
}

CarryOut.propTypes = {}

export default CarryOut
