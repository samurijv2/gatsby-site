require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "Sam Waymire",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "blog"
      }
    }, 
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: '1lbx4kp3',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    }
  ]
}