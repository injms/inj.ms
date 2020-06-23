const site = {
  // all the defaults
  locale: 'en-GB',
  baseURL: process.env.CONTEXT === 'production' ? 'https://inj.ms' : process.env.DEPLOY_PRIME_URL,
  themeColour: '#f9bf3b',
  twitter: {
    cardType: 'summary',
    site: '@_injms_',
    creator: '@_injms_',
  },
  opengraph: {
    type: 'website',
  },
  rel: {
    me: [
      'https://www.ianjamesphotograpy.com',
      'https://ianjames.photograpy',
      'https://inj.ms',
      'https://instagram.com/inj.ms',
      'https://github.com/injms',
      'https://twitter.com/_injms_',
    ],
    publisher: [
      'https://inj.ms',
    ],
  },
  footer: {
    links: [
      {
        name: 'Github',
        icon: '/assets/icons/github.svg',
        href: 'https://inj.ms/github',
      },
      {
        name: 'LinkedIn',
        icon: '/assets/icons/linkedin.svg',
        href: 'https://inj.ms/linkedin',
      },
      {
        name: 'Instagram',
        icon: '/assets/icons/instagram.svg',
        href: 'https://inj.ms/instagram',
      },
    ],
  },
}

module.exports = site
