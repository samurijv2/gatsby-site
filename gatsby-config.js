require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "Sam Waymire",
    description: "my cool marketing website",
    siteUrl: `https://www.samwaymire.com`,
    author: "Sam Waymire",
    keywords: ["digital marketing", "google ads"]
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-netlify-cache`,
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
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
      resolve: 'gatsby-plugin-fathom',
      options: {
        trackingUrl: 'tigershark.samwaymire.com',
        siteId: 'SYUPRFVQ',
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