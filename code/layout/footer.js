import React from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';

class Footer extends React.Component {
	render() {
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
	links: PropTypes.array.isRequired,
};

Footer.defaultProps = {};

export default Footer;