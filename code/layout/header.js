import React from 'react';
import PropTypes from 'prop-types';

/**
 * The Header component
 */
const Header = ({ siteTitle, siteImage }) => (
    <header className="hdr">
        <h1 className="intro">
            <img
                src={ siteImage.src }
                srcSet={ siteImage.srcset }
                sizes="1.11em"
                alt={siteImage.alt}
                aria-hidden="true"
                role="presentation"
            />
            { siteTitle }
        </h1>
    </header>
);

Header.defaultProps = {};

export default Header;