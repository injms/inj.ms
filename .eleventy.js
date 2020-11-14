const fs = require('fs')
const i18n = require('eleventy-plugin-i18n')
const { format: prettier } = require('prettier')
const { minify: htmlMinifier } = require('html-minifier')
const {
  cssmin,
  markdownify,
} = require('@injms/quack-nunjucks-filters')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false)

  eleventyConfig.addPassthroughCopy('assets')

  eleventyConfig.addFilter('cssmin', (code) => cssmin(code))

  // Use the same Markdown settings for Eleventy as the Nunjucks filter.
  eleventyConfig.setLibrary('md', markdownify)

  // Prettifys HTML
  eleventyConfig.addTransform('html', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      if (isProduction === true) {
        return htmlMinifier(content, {
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          sortAttributes: true,
          sortClassName: true,
        })
      }

      return prettier(content, {
        parser: 'html',
      })
    }
    return content
  })

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: (_err, bs) => {
        bs.addMiddleware('*', (_req, res) => {
          res.writeHead(404)

          // We read this for every 404, otherwise it'll be cached. That's
          // faster - however we don't want to have to keep stopping and starting
          // eleventy to see every change we make to the 404 page. Since this is
          // for dev only, and not production, I'm okay with that.
          res.write(fs.readFileSync('site/404.html'))

          res.end()
        })
      },
    },
    // https: {
    //   key: '../localhost-key.pem',
    //   cert: '../localhost.pem',
    // },
    ui: false,
  })

  eleventyConfig.addPlugin(i18n, {
    translations: {
      site: {
        name: {
          short: {
            'en-GB': 'inj.ms',
          },
          long: {
            'en-GB': 'Ian makes things for the web',
          },
        },
        description: {
          short: {
            'en-GB': "Hi, I'm Ian and I make things for the web.",
          },
          long: {
            'en-GB': "I'm Ian and I wear many hats of many colours – though usually I'm found wearing my frontend developer trilby. In my spare time I wear a photography beanie. And the rest of the time I'm wearing a parental hard hat.",
          },
        },
      },
    },
    fallbackLocales: {
      '*': 'en-GB',
    },
  })
  return {
    dir: {
      data: '../_data',
      input: '_pages',
      includes: '../_includes',
      layouts: '../_layouts',
      output: 'site',
    },
  }
}
