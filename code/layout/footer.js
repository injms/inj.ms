import React from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';

/**
 * The Footer component
 */
class Footer extends React.Component {
	render() {
		// const editedTitle = this.props.title.toLowerCase().replace(/\./, '') + ' | inj.ms';
		return(
			<footer className="ftr">
				{
					this.props.links.map( (obj, key) => {
						return <Button key={obj.name.toLowerCase().replace(/ /g, '') + key} to={obj.link} icon={obj.icon} name={obj.name} />
					})
				}
			</footer>
		);
	}
};

Footer.propTypes = {
	/**
	 * links: (partials)(4)
	 */
	links: PropTypes.node.isRequired,
};

Footer.defaultProps = {};

export default Footer;