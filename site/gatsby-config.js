module.exports = {
  siteMetadata: {
    title: "Cristian Moyano | Portfolio",
    description: "Cristian Moyano's Portfolio",
    author: "Cristian Moyano",
    siteUrl: "https://cristianmoyano.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-transformer-json",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-KLMKXJZ8SK",
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-KLMKXJZ8SK", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: "./src/data/",
      },
      __key: "project",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
