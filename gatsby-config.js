/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`article`, `user`],
        //If using single types place them in this array.
        singleTypes: [`homepage`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
  ],
  
}
