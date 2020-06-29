const {
  dest,
  watch,
  src,
} = require('gulp')

const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

sass.compiler = require('sass')

const sourceFolders = [
  '_includes/**/*.scss',
  '_layouts/**/*.scss',
]

const destinationFolder = 'assets/styles'

const compileSass = () => {
  const postcssPlugins = [
    autoprefixer(),
    cssnano(),
  ]

  return src(sourceFolders)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(dest(destinationFolder))
}

const watchSass = () => {
  watch(sourceFolders, { ignoreInitial: false }, compileSass)
}

exports.default = watchSass
exports.compile = compileSass
