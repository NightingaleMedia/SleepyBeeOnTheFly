import config from "../components/Menu/config"
import { gapi } from "gapi-script"

export function getCarryOut(callback) {
  gapi.client.load("sheets", "v4", () => {
    gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "CARRYOUT!A2:G60",
      })
      .then(
        res => {
          callback({ section: "CarryOut", data: res.result.values })
        },
        res => {
          callback(false, res.result.error)
        }
      )
  })
}

export function getDrinks(callback) {
  gapi.client.load("sheets", "v4", () => {
    gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "DRINKS!A2:G60",
      })
      .then(
        res => {
          callback({ section: "Drinks", data: res.result.values })
        },
        res => {
          callback(false, res.result.error)
        }
      )
  })
}

export function load(callback) {
  gapi.client.load("sheets", "v4", () => {
    gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "DRINKS!A1:G60",
      })
      .then(
        res => {
          callback(res.result.values)
        },
        res => {
          callback(false, res.result.error)
        }
      )
  })
}
