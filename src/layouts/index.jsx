import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import IntroCard from '../components/IntroCard'

const title = `ian makes things for the web | inj.ms`;
const description = `I'm Ian and I wear many hats of many colours - though usually I'm found wearing my front end developer trilby or my digital project manager bowler.`;
const canonicalUrl = `https://inj.ms`;

const metadata = [
    { name: "theme-color", content: "#f9bf3b"},
    { name: "rating", content: "general"},
    { name: "format-detection", content: "telephone=no"},

    { name: 'description', content: description},

    { name: 'twitter:card',        content: "summary" },
    { name: 'twitter:site',        content: "@_irj" },
    { name: 'twitter:creator',     content: "@_irj" },
    { name: 'twitter:url',         content: canonicalUrl },
    { name: 'twitter:title',       content: title},
    { name: 'twitter:description', content: description},

    { property: 'og:url',         content: canonicalUrl },
    { property: 'og:type',        content: 'website'},
    { property: 'og:site_name',   content: title},
    { property: 'og:locale',      content: 'en-GB'},
    { property: 'og:description', content: description},
];

const link = [
    { rel: "canonical", href: canonicalUrl },

    { rel: "me", href: "https://www.ianjamesphotograpy.com" },
    { rel: "me", href: "https://instagram.com/inj.ms" },
    { rel: "me", href: "https://github.com/injms" },
    { rel: "me", href: "https://twitter.com/_irj" },
    { rel: "me", href: "https://google.com/+IanJamesPhotography" },
    
    { rel: "publisher", href: "https://plus.google.com/+IanJamesPhotography" }

];

const TemplateWrapper = ({ children }) => (
  <section>
    <Helmet meta={metadata} link={link} title={title} /> 
      {children()}
  </section>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
