import PropTypes from 'prop-types';
import React from 'react';

/**
 * The page layout component
 */
class Page extends React.Component {
	render() {
		// const editedTitle = this.props.title.toLowerCase().replace(/\./, '') + ' | inj.ms';
		return(
			<html lang="en">
				{ this.props.head }
				<body className={`${this.props._ID} grid`}>
					{ this.props.header }
					<section className="wrapper">
						{ this.props.main }
					</section>
					{ this.props.footer }
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
