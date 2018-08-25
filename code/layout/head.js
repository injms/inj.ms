import React from 'react';

class Head extends React.Component {
	render() {
        const editedTitle =  this.props._pages[this.props._ID].title.toLowerCase().replace(/\./, '') + ' | inj.ms';
        const canonicalURL = `https://inj.ms/${this.props._ID}`;
		return(
            <head>
                <title>{ editedTitle }</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="stylesheet" href={ this.props._relativeURL( `/assets/css/global.css`, this.props._ID ) } />

                <meta name="theme-color" content="#f9bf3b" />
                <meta name="rating" content="general" />
                <meta name="format-detection" content="telephone=no" />

                <meta name="description" content={ this.props._pages[this.props._ID].metadata.description }/>
                <link rel="canonical" href={ canonicalURL } />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@_irj" />
                <meta name="twitter:creator" content="@_irj" />
                <meta name="twitter:url" content={ canonicalURL } />
                <meta name="twitter:title" content={ editedTitle } />
                <meta name="twitter:description" content={ this.props._pages[this.props._ID].metadata.description }/>

                <meta property="og:url" content={ canonicalURL} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={ editedTitle } />
                <meta property="og:locale" content="en-GB" />
                <meta property="og:description" content={ this.props._pages[this.props._ID].metadata.description }/>

                <link rel="me" href="https://www.ianjamesphotograpy.com" />
                <link rel="me" href="https://ianjames.photograpy" />
                <link rel="me" href="https://inj.ms" />
                <link rel="me" href="https://instagram.com/inj.ms" />
                <link rel="me" href="https://github.com/injms" />
                <link rel="me" href="https://twitter.com/_irj" />
                <link rel="me" href="https://google.com/+IanJamesPhotography" />

                <link rel="publisher" href="https://plus.google.com/+IanJamesPhotography" />
            </head>
		);
    }
}

export default Head;
