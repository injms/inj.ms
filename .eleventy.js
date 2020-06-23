const fs = require('fs')

const cssmin = require('./nunjuck-filters/cssmin')
const debug = require('./nunjuck-filters/debug')

module.exports = (eleventyConfig) => {

  eleventyConfig.addPassthroughCopy('assets')

  // Minifies CSS
  eleventyConfig.addFilter("cssmin", (code) => cssmin(code) )

  // Passes things along to console log and returns without altering
  eleventyConfig.addFilter('debug', (s) => debug(s) )

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
     ready: (_err, bs) => {
       bs.addMiddleware('*', (_req, res) => {
        res.writeHead(404)

        // We read this for every 404, otherwise it'll be cached. That's
        // faster - however we don't want to have to keep stopping and starting
        // eleventy to see every change we make to the 404 page. Since this is
        // for dev only, and not production, I'm okay with that.
        res.write(fs.readFileSync('site/404/index.html'))

        res.end()
      })
     }
    },
    https: {
        key: '../localhost-key.pem',
        cert: '../localhost.pem',
    },
    ui: false,
  })

  return {
    dir: {
      data: '../_data',
      input: '_pages',
      includes: '../_includes',
      layouts: '../_layouts',
      output: 'site',
    }
  }
}
