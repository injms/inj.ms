const CleanCSS = require("clean-css");

module.exports = (eleventyConfig) => {

  eleventyConfig.addPassthroughCopy('assets')

  eleventyConfig.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles)

  return {
    dir: {
      data: '../_data',
      input: '_views',
      output: 'site',
    }
  }
}
