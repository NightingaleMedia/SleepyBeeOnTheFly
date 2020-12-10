const fetch = require("node-fetch")
const fs = require("fs")
let csvToJson = require("convert-csv-to-json")
const path = require("path")
const MAIN_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcHWH9W2MYal2l64Jw3GTrZ8kFfp4rGAFB7RSMntpVGxLV316D9yLIexxrqp80wzmjqZ2J6tCzI5lN/pub?output=csv"

const sheets = [
  { id: 0, name: "CarryOut" },
  { id: 492911777, name: "Drinks" },
]

module.exports = function getMenuData() {
  sheets.forEach(sheet => {
    const dir = path.join(__dirname + `../../menu-data/menu--${sheet.name}.csv`)
    fetch(MAIN_URL + "&gid=" + sheet.id)
      .then(res => res.buffer())
      .then(result =>
        fs.writeFile(dir, result, err => {
          if (err) console.log(err)
          csvToJson.generateJsonFileFromCsv(
            dir,
            path.join(__dirname + `../../menu-data/menu--${sheet.name}.json`)
          )
        })
      )
  })
}
