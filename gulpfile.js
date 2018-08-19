'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

const paths = {
    styles: {
      src: 'code/scss/**/*.scss',
      dest: 'assets/css/'
    }
};

const styles = (callback) => {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('global.css'))
        .pipe(gulp.dest(paths.styles.dest));
};

const watch = () => {
    gulp.watch(paths.styles.src, styles);
}

gulp.task('default', watch);
gulp.task('styles', styles);
