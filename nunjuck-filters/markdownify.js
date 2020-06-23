const MarkdownIt = require('markdown-it')

// For some reason, I'm unable to get the Prism module from npm working on both
// the client side and in the build process. For this reason, I've manually
// included it. To update: go to PrismJS website, select all languages, copy and
// paste the JavaScript code into the file.
const Prism = require('./_prism.vendor.js')

const makeLanguageReadable = (string) => {
  return string
    .replace('javascript', 'JavaScript')
    .replace(/^js$/, 'JavaScript')
    .replace('scss', 'Sassy CSS')
    .replace('css', 'CSS') // keep after Sassy CSS, or it will replace the `css` in `scss`
    .replace('html', 'HTML')
    // 👇 Capitalise first character - eg nunjucks to Nunjucks.
    // Keep as the final transformation.
    .replace(/^(.{1})/, (character) => character.toUpperCase())
}

const md = new MarkdownIt({
  html: true,

  // Enable some language-neutral replacement and quotes beautification.
  typographer: true,

  // Don't automatically link a thing that looks like URL.
  linkify: false,

  // Highlighter function for code blocks.
  highlight: (string, language) => {
    let languageForHighlighter = language
    const langaugeForShow = language

    // Nunjucks is the same (more or less) as Jinja - so we want to highlight
    // Jinja, but label it as Nunjucks
    if (language === 'nunjucks') {
      languageForHighlighter = 'jinja2'
    }

    if (language && Prism.languages[languageForHighlighter]) {
      try {
        return `<pre class='language--${languageForHighlighter}' data-language='${makeLanguageReadable(langaugeForShow)}'>` +
                `<code>${Prism.highlight(string, Prism.languages[languageForHighlighter], languageForHighlighter)}</code>` +
                '</pre>'
      } catch (error) {
        console.error(error)
      }
    }

    return string
  },
})

module.exports = md
