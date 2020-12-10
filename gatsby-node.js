const getMenuData = require("./src/utils/preBuildSheet")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
exports.onPreInit = packet => {
  getMenuData()
}
// You can delete this file if you're not using it
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /gapi-script/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }
