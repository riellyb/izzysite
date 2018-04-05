module.exports = {
    siteMetadata: {
        title: 'Izzy Washburn',
    },
    plugins: [
         'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./src/favicon.png",
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        }
    ],
};