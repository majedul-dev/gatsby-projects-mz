module.exports = {
  siteMetadata: {
    title: "WebDev Portfolio",
    description: "This is WebDev Portfolio Site",
    author: "@webdev",
    twitterUsername: "@john_smilga",
    image: "/twitter-img.png",
    siteUrl: "https://testing-strapi-gatsby-build.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://projects-portfolio-mz.herokuapp.com`,
        // apiURL: "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`projects`],
        // singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
  ],
}

// module.exports = {
//   siteMetadata: {
//     title: `Gatsby Default Starter`,
//     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//     author: `@gatsbyjs`,
//   },
//   plugins: [
//     // `gatsby-plugin-react-helmet`,
//     // `gatsby-transformer-sharp`,
//     // `gatsby-plugin-sharp`,
//     // {
//     //   resolve: `gatsby-source-filesystem`,
//     //   options: {
//     //     name: `images`,
//     //     path: `${__dirname}/src/images`,
//     //   },
//     // },
//     {
//       resolve: `gatsby-source-strapi`,
//       options: {
//         apiURL: `http://localhost:1337`,
//         queryLimit: 1000, // Default to 100
//         contentTypes: [`projects`],
//       },
//     },
//   ],
// }
