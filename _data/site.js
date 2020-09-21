const site = {
  // all the defaults
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
}

module.exports = site
