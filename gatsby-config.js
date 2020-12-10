module.exports = {
  siteMetadata: {
    title: `Sleepy Bee On The Fly`,
    description: `Sleepy Bee On The Fly Restaurant.`,
    author: `@Nightingale Media`,
  },
  assetPrefix: `https://sleepybeeonthefly.com/`,

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        // username: `1320217635`,
        username: `15776746060`,
        access_token: `IGQVJXN2VPTVJQZAXZAqVkFOeGN5WElxYURWd05DMHg3TTBDbEg5OGlkVVV4OVVsdUh2ZAlduZAHNneGZA1X0pBTzVfMnNWUTh2RU1rTHpaOFQyU3BycU0tS2YtMllVX1U5MmI4dWpUUGtyN1FjNHhWR0k3OEtiTlEzbVpldkJB`,
        // instagra_id: `17841400769070628`,
        // instagram_id:
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: `jtg0pti`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/menu-data/`,
      },
    },
    `gatsby-transformer-csv`,
  ],
}
