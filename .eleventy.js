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
        // Provides the 404 content without redirect.
        res.writeHead(404)
        res.write(fs.readFileSync('site/404/index.html'))
        res.end()
      })
     }
    }
  })

  return {
    dir: {
      data: '../_data',
      input: '_views',
      output: 'site',
    }
  }
}
