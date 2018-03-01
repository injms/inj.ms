import React, { Fragment } from 'react';

import styles from './Card.module.scss';

class Card extends React.Component {

    render() {

        return(
            <article className={styles.grid}>
                <header className={styles.hdr}>
                    <h1 className={styles.intro}>Ian makes things for the web<span className={styles.highlight}>.</span></h1>
                </header>
            	<section className={styles.wrapper}>
                    <p>I'm Ian and I wear many hats of many colours - though usually I'm found wearing my <b>front end developer</b> trilby or my <b>digital project manager</b> bowler. In my spare time I wear a photography beanie.</p>
            	</section>
                <footer className={styles.ftr}>
                    {/* <a className={styles.button}>
                        <img className={styles.button__image} src="https://icongr.am/feather/mail.svg?size=40&color=141E30" width="40" height="40" />
                        Email
                    </a> */}
                    <a href="https://inj.ms/github" className={styles.button} onMouseMove={this.gradientTracking}>
                        <img alt="" aria-hidden="true" role="presentation" className={styles.button__image} src="https://icongr.am/feather/github.svg?size=40&color=141E30" width="40" height="40" />
                        GitHub
                    </a>
                    <a href="https://inj.ms/linkedin" className={styles.button}>
                        <img alt="" aria-hidden="true" role="presentation" className={styles.button__image} src="https://icongr.am/feather/linkedin.svg?size=40&color=141E30" width="40" height="40" />
                        LinkedIn
                    </a>
                    <a href="https://inj.ms/instagram" className={styles.button}>
                        <img alt="" aria-hidden="true" role="presentation" className={styles.button__image} src="https://icongr.am/feather/instagram.svg?size=40&color=141E30" width="40" height="40" />
                        Instagram
                    </a>
                    <a href="https://inj.ms/photography" className={styles.button}>
                        <img alt="" aria-hidden="true" role="presentation" className={styles.button__image} src="https://icongr.am/feather/image.svg?size=40&color=141E30" width="40" height="40" />
                        Photos
                    </a>
                </footer>
            </article>
        );
    }
}

export default Card;
