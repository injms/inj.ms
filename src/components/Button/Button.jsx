import React from 'react';

import styles from './Button.module.scss';

class Button extends React.Component {

    render() {

    	this.state = {
    		icon : `https://icongr.am/feather/${this.props.icon}.svg?size=40&color=141E30`
    	}

        return(
            <a href={this.props.to} className={styles.button}>
                <img alt="" aria-hidden="true" role="presentation" className={styles.button__image} src={this.state.icon} width="40" height="40" />
                {this.props.children}
            </a>
        );

    }

}

export default Button;
