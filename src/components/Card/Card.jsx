import React from 'react';

import styles from './Card.module.scss';
import Button from '../Button/Button.jsx';

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
                    <Button to="https://inj.ms/github" icon="github">GitHub</Button>
                    <Button to="https://inj.ms/linkedin" icon="linkedin">LinkedIn</Button>
                    <Button to="https://inj.ms/instagram" icon="instagram">Instagram</Button>
                    <Button to="https://inj.ms/photography" icon="image">Photos</Button>
                </footer>
            </article>
        );
    }
}

export default Card;
