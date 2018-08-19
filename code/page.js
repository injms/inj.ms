import PropTypes from 'prop-types';
import React from 'react';

import Button from './components/Button';

/**
 * The page layout component
 */
// const Page = ({ title, stylesheet, header, main, footer, script, this.props._relativeURL, this.props._ID, _pages, _self }) => (
class Page extends React.Component {


	render() {
		const editedTitle = this.props.title.toLowerCase().replace(/\./, '') + ' | inj.ms';
		return(
			<html lang="en">
				<head>
					<title>{ editedTitle }</title>
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />

					<link rel="stylesheet" href={ this.props._relativeURL( `/assets/css/global.css`, this.props._ID ) } />
					
					<meta name="theme-color" content="#f9bf3b"/>
					<meta name="rating" content="general"/>
					<meta name="format-detection" content="telephone=no"/>
					
					<meta name="description" content={ this.props._pages[this.props._ID].metadata.description }/>

					<meta name="twitter:card" content="summary"/>
					<meta name="twitter:site" content="@_irj"/>
					<meta name="twitter:creator" content="@_irj"/>
					<meta name="twitter:url" content="https://inj.ms"/>
					<meta name="twitter:title" content={ editedTitle } />
					<meta name="twitter:description" content={ this.props._pages[this.props._ID].metadata.description }/>

					<meta property="og:url" content="https://inj.ms"/>
					<meta property="og:type" content="website"/>
					<meta property="og:site_name" content={ editedTitle } />
					<meta property="og:locale" content="en-GB"/>
					<meta property="og:description" content={ this.props._pages[this.props._ID].metadata.description }/>

					<link rel="me" href="https://www.ianjamesphotograpy.com"/>
					<link rel="me" href="https://instagram.com/inj.ms"/>
					<link rel="me" href="https://github.com/injms"/>
					<link rel="me" href="https://twitter.com/_irj"/>
					<link rel="me" href="https://google.com/+IanJamesPhotography"/>
					<link rel="publisher" href="https://plus.google.com/+IanJamesPhotography"/>
				</head>
				<body>
					<article className="grid">
						<header className="hdr">
							<h1 className="intro">
								<img src="/assets/images/ian-james.jpg" srcSet="/assets/images/ian-james@2x.jpg 180w, /assets/images/ian-james@3x.jpg 270w" sizes="1.11em" alt="" aria-hidden="true" role="presentation" data-reactid="6"></img>
								{this.props.title}
							</h1>
						</header>
						<section className="wrapper">
							{ this.props.main }
						</section>
						<footer className="ftr">
							{ 
								this.props._pages[this.props._ID].links.map( (object, key) => {
									return <Button to={object.link} name={object.name} icon={object.icon} />
								}) 
							}
						</footer>
					</article>
				</body>
			</html>
		)
};

}
Page.propTypes = {
/**
	 * title: Homepage
	 */
	title: PropTypes.string.isRequired,

	/**
	 * main: (partials)(5)
	 */
	main: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
