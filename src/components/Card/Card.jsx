import React from 'react';

import RubikWoff2 from '../../fonts/rubik-medium.woff2';
import RubikWoff from '../../fonts/rubik-medium.woff';

import iconGitHub from '../../icons/github.svg';
import iconLinkedIn from '../../icons/linkedin.svg';
import iconInstagram from '../../icons/instagram.svg';
import iconImage from '../../icons/image.svg';

import Button from '../Button/Button.jsx';
import styles from './Card.module.scss';

class Card extends React.Component {

    render() {

        return(
            <article className={styles.grid}>
                <header className={styles.hdr}>
                    <h1 className={styles.intro}>{this.props.title}</h1>
                </header>
            	<section className={styles.wrapper}>
                    {this.props.children}
            	</section>
                <footer className={styles.ftr}>
                    {/* <a className={styles.button}>
                        <img className={styles.button__image} src="https://icongr.am/feather/mail.svg?size=40&color=141E30" width="40" height="40" />
                        Email
                    </a> */}
                    <Button to="https://inj.ms/github" icon={iconGitHub}>GitHub</Button>
                    <Button to="https://inj.ms/linkedin" icon={iconLinkedIn}>LinkedIn</Button>
                    <Button to="https://inj.ms/instagram" icon={iconInstagram}>Instagram</Button>
                    <Button to="https://inj.ms/photography" icon={iconImage}>Photos</Button>
                </footer>
            </article>
        );
    }
}

export default Card;
