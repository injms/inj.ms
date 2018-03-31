import React from 'react';

import RubikWoff2 from '../../fonts/rubik-medium.woff2';
import RubikWoff from '../../fonts/rubik-medium.woff';

import iconGitHub from '../../icons/github.svg';
import iconLinkedIn from '../../icons/linkedin.svg';
import iconInstagram from '../../icons/instagram.svg';
import iconImage from '../../icons/image.svg';

import Button from '../Button/';
import styles from './IntroCard.module.scss';

import avatar from '../../images/ian-james.jpg';
import avatar2 from '../../images/ian-james@2x.jpg';
import avatar3 from '../../images/ian-james@3x.jpg';
const srcset = `${avatar} 90w, ${avatar2} 180w, ${avatar3} 270w`;

class Card extends React.Component {

    render() {

        return(
            <article className={styles.grid}>
                <header className={styles.hdr}>
                    <h1 className={styles.intro}>
                        <img src={avatar} srcSet={srcset} sizes="1.11em" alt="" aria-hidden="true" role="presentation" />
                        {this.props.title}
                    </h1>
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