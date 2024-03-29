const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const postCss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function style() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(postCss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
