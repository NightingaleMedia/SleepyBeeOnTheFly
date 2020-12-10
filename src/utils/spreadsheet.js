// import config from "../components/Menu/config"
// import { gapi } from "gapi-script"
// import Menu from "../pages/menu"
// export function getCarryOut(callback) {
//   gapi.client.load("sheets", "v4", () => {
//     gapi.client.sheets.spreadsheets.values
//       .get({
//         spreadsheetId: config.spreadsheetId,
//         range: "CARRYOUT!A2:G60",
//       })
//       .then(
//         res => {
//           callback({ section: "Carryout", data: res.result.values }, null, null)
//         },
//         res => {
//           callback(false, res.result.error)
//         }
//       )
//   })
// }
// export function getDrinks(callback) {
//   gapi.client.load("sheets", "v4", () => {
//     gapi.client.sheets.spreadsheets.values
//       .get({
//         spreadsheetId: config.spreadsheetId,
//         range: "DRINKS!A2:G60",
//       })
//       .then(
//         res => {
//           callback({ section: "Drinks", data: res.result.values }, null, null)
//         },
//         res => {
//           callback(false, res.result.error)
//         }
//       )
//   })
// }

// export const mapItems = packet => {
//   let menuMap = []

//   packet.data.map(item => {
//     //this means it is a title section
//     if (item[0] !== "") {
//       menuMap.push({
//         section: packet.section || "",
//         type: "title",
//         title: item[0] || "item title",
//         description: item[3] || "",
//       })
//       //this checks for if its a menu item
//     } else if (item[6] === "TRUE") {
//       menuMap.push({
//         section: packet.section || "",
//         type: "item",
//         title: item[1] || "",
//         dietaryNotes: item[2].split(","),
//         description: item[3] || "",
//         price: item[4] || "",
//         additionalNotes: item[5] || "",
//       })
//     }
//   })
//   return menuMap
// }
