import React from 'react';

class Button extends React.Component {
    render() {
        return(
            <a href={this.props.to} className="button" >
                <img alt="" aria-hidden="true" role="presentation" src={this.props.icon} width="40" height="40" className="button__image" />
                {this.props.name}
            </a>
        );
    }
}

export default Button;