import React, { useEffect, useState } from "react"
import "./style.css"
import SecCarryOut from "./Sections/CarryOut"
import Drinks from "./Sections/Drinks"

const Menu = ({ collapseHeader, expandHeader, loading, data }) => {
  let initialState = {
    Carryout: {
      sectionOpen: false,
      data: data.Carryout,
    },
    Drinks: {
      sectionOpen: false,
      data: data.Drinks,
    },
  }
  const [menuData, setMenuData] = useState(initialState)

  useEffect(() => {
    setMenuData(prev => {
      return {
        ...prev,
        ...data,
      }
    })
  }, [data])

  useEffect(() => {
    let timeout
    if (!menuData.Carryout.sectionOpen && !menuData.Drinks.sectionOpen) {
      timeout = setTimeout(() => expandHeader(), 1200)
    } else if (!menuData.Carryout.sectionOpen || !menuData.Drinks.sectionOpen) {
      collapseHeader()
    }
    return () => clearTimeout(timeout)
  }, [menuData.Carryout.sectionOpen, menuData.Drinks.sectionOpen])

  const toggleOpen = sectionName => {
    const data = { ...menuData }
    const origValue = !data[sectionName].sectionOpen
    data.Drinks.sectionOpen = false
    data.Carryout.sectionOpen = false
    data[sectionName].sectionOpen = origValue
    setMenuData(data)
  }
  return loading.loading ? (
    ""
  ) : (
    <React.Fragment>
      <SecCarryOut
        open={menuData.Carryout.sectionOpen}
        toggleOpen={() => toggleOpen("Carryout")}
        data={data.Carryout}
      />

      <Drinks
        open={menuData.Drinks.sectionOpen}
        toggleOpen={() => toggleOpen("Drinks")}
        data={data.Drinks}
      />
    </React.Fragment>
  )
}

Menu.propTypes = {}

export default Menu
