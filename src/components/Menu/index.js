import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import "./style.css"
import SecCarryOut from "./Sections/CarryOut"
import Drinks from "./Sections/Drinks"

const Menu = ({ collapseHeader, expandHeader, loading }) => {
  const { carryOut, drinks } = useStaticQuery(
    graphql`
      query {
        carryOut: allMenuCarryOutCsv {
          edges {
            node {
              AdditionalNotes
              Description
              DietaryNotes
              Price
              SectionTitle
              Title
              id
              menuItem
            }
          }
        }
        drinks: allMenuDrinksCsv {
          edges {
            node {
              AdditionalNotes
              Description
              DietaryNotes
              Price
              Title
              id
              menuItem
              SectionTitle
            }
          }
        }
      }
    `
  )

  let initialState = {
    Carryout: {
      sectionOpen: false,
      data: [],
    },
    Drinks: {
      sectionOpen: false,
      data: [],
    },
  }
  const [menuData, setMenuData] = useState(initialState)

  useEffect(() => {
    function mapNode(section, name) {
      let data = []
      section.edges.map(e => {
        if (e.node.SectionTitle !== "") {
          data.push({
            section: name,
            title: e.node.SectionTitle || "",
            type: "title",
            id: e.node.id,
            description: e.node.Description || "",
          })
        } else if (e.node.menuItem === "TRUE") {
          data.push({
            section: "CarryOut",
            type: "item",
            title: e.node.Title || "",
            dietaryNotes: e.node.DietaryNotes.split(","),
            price: e.node.Price || "",
            description: e.node.Description || "",
            additionalNotes: e.node.AdditionalNotes || "",
          })
        }
      })

      return data
    }

    setMenuData(prev => {
      return {
        ...prev,
        Drinks: { sectionOpen: false, data: mapNode(drinks, "Drinks") },
        Carryout: { sectionOpen: false, data: mapNode(carryOut, "Carry Out") },
      }
    })
  }, [])

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
        data={menuData.Carryout.data}
      />

      <Drinks
        open={menuData.Drinks.sectionOpen}
        toggleOpen={() => toggleOpen("Drinks")}
        data={menuData.Drinks.data}
      />
    </React.Fragment>
  )
}

Menu.propTypes = {}

export default Menu
