import React from 'react';
import PropTypes from 'prop-types';

class Head extends React.Component {
	render() {
        const editedTitle =  this.props._pages[this.props._ID].title.toLowerCase().replace(/\./, '');
        const pageURL = (path) => {
            return (path === 'index') ? '' : path;
        }
        const canonicalURL = `https://inj.ms/${ pageURL(this.props._ID) }`;

		return(
            <head>
                <title>{ editedTitle } | { this.props.siteName }</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="stylesheet" href={ this.props._relativeURL( `/assets/css/global.css`, this.props._ID ) } />

                <meta name="theme-color" content={ this.props.themeColour } />
                <meta name="rating" content="general" />
                <meta name="format-detection" content="telephone=no" />

                <meta name="description" content={ this.props._pages[this.props._ID].metadata.description }/>
                <link rel="canonical" href={ canonicalURL } />

                <meta name="twitter:card" content={ this.props.twitter.cardType } />
                <meta name="twitter:site" content={ this.props.twitter.site }/>
                <meta name="twitter:creator" content={ this.props.twitter.creator }/>
                <meta name="twitter:url" content={ canonicalURL } />
                <meta name="twitter:title" content={ editedTitle } />
                <meta name="twitter:description" content={ this.props._pages[this.props._ID].metadata.description }/>

                <meta property="og:url" content={ canonicalURL} />
                <meta property="og:type" content={ this.props.opengraph.type } />
                <meta property="og:site_name" content={ editedTitle } />
                <meta property="og:locale" content={ this.props.locale } />
                <meta property="og:description" content={ this.props._pages[this.props._ID].metadata.description }/>
                {
                    this.props.rel.me.map( url => {
                        return <link rel="me" href={ url } type="text/html" />
                    })
                }
	 	<meta name="p:domain_verify" content="80746af448e9e3c81111669178cc05eb" />
            </head>
		);
    }
}
Head.propTypes = {
    themeColour: PropTypes.string.isRequired,
    twitter: PropTypes.object.isRequired,
    opengraph: PropTypes.object.isRequired,

};

export default Head;
