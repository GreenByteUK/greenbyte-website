module.exports = {
  siteMetadata: {
    title: `GreenByte`,
    description: `Net zero technologists`,
    author: `@r-ichard`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -70,
      },
    },
    {
      resolve: "gatsby-source-blogger",
      options: {
        apiKey: "AIzaSyBwC5RCGKf3le7ei1q_2z3qAGBlzhtwugE",
        blogId: "8372429003282801727",
        downloadImage: true,
      },
    },
    {
      resolve: "gatsby-source-medium",
      options: {
        username: "@greenbyte-london",
      },
    },
  ],
};
