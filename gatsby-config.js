module.exports = {
	siteMetadata: {
		title: `inj.ms`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `inj.ms`,
				short_name: `inj.ms`,
				start_url: `/`,
				background_color: `#eeeeee`,
				theme_color: `#f9bf3b`,
				display: `minimal-ui`
			},
		},
		`gatsby-plugin-offline`
	],
	polyfill: false
};
