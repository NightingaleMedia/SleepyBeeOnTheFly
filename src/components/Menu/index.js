import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./style.css"
import CarryOut from "./Sections/CarryOut"
import Drinks from "./Sections/Drinks"

const Menu = ({ collapseMenu, data }) => {
  const [menuData, setMenuData] = useState({
    CarryOut: {
      sectionOpen: false,
      data: data.CarryOut,
    },
    Drinks: {
      sectionOpen: false,
      data: data.Drinks,
    },
  })

  useEffect(() => {
    let timeout
    if (!menuData.CarryOut.sectionOpen && !menuData.Drinks.sectionOpen) {
      console.log("ned")
      timeout = setTimeout(() => collapseMenu(false), 1200)
    } else if (!menuData.CarryOut.sectionOpen || !menuData.Drinks.sectionOpen) {
      collapseMenu(true)
    }
    return () => clearTimeout(timeout)
  }, [menuData.CarryOut.sectionOpen, menuData.Drinks.sectionOpen])

  const closeAllTabs = () => {
    console.log("closing")
    setMenuData({
      Drinks: {
        ...menuData.Drinks,
        sectionOpen: false,
      },
      CarryOut: {
        ...menuData.CarryOut,
        sectionOpen: false,
      },
    })
  }
  const toggleOpen = sectionName => {
    const data = { ...menuData }
    const origValue = !data[sectionName].sectionOpen
    data.Drinks.sectionOpen = false
    data.CarryOut.sectionOpen = false
    data[sectionName].sectionOpen = origValue
    setMenuData(data)
  }
  return (
    <React.Fragment>
      {menuData.CarryOut !== [] ? (
        <CarryOut
          open={menuData.CarryOut.sectionOpen}
          toggleOpen={() => toggleOpen("CarryOut")}
          data={menuData.CarryOut.data}
        />
      ) : (
        ""
      )}
      {menuData.Drinks !== [] ? (
        <Drinks
          open={menuData.Drinks.sectionOpen}
          toggleOpen={() => toggleOpen("Drinks")}
          data={menuData.Drinks.data}
        />
      ) : (
        ""
      )}
    </React.Fragment>
  )
}

Menu.propTypes = {}

export default Menu
