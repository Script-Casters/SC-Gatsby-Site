module.exports = {
  siteMetadata: {
    title: "Script Casters",
    author: "Frankie Rodriguez",
    description: "A Gatsby.js V2 Starter based on Dimension by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Script Casters',
        short_name: 'SC Site',
        start_url: '/',
        background_color: '#990815',
        theme_color: '#990815',
        display: 'minimal-ui',
        icon: 'src/images/rev-diamond.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
};
