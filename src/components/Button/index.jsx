import React from 'react';

import styles from './Button.module.scss';

class Button extends React.Component {

    render() {
        return(
            <a href={this.props.to} className={styles.button}>
                <img alt="" aria-hidden="true" role="presentation" className={styles.button__image} src={this.props.icon} width="40" height="40" />
                {this.props.children}
            </a>
        );

    }

}

export default Button;