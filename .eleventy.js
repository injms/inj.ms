const fs = require('fs')
const CleanCSS = require("clean-css");

module.exports = (eleventyConfig) => {

  eleventyConfig.addPassthroughCopy('assets')

  eleventyConfig.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles)

  eleventyConfig.setBrowserSyncConfig({
    https: {
        key: '../localhost-key.pem',
        cert: '../localhost.pem',
    },
    callbacks: {
     ready: function(err, bs) {
       bs.addMiddleware('*', (req, res) => {
        res.writeHead(404)

        // We read this for every 404, otherwise it'll be cached. That's
        // faster - however we don't want to have to keep stopping and starting
        // eleventy to see every change we make to the 404 page. Since this is
        // for dev only, and not production, I'm okay with that.
        res.write(fs.readFileSync('site/404/index.html'))

        res.end()
      })
     }
    }
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
