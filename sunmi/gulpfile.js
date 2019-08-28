'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

// sass
gulp.task('sass', async function() {
    return gulp
        .src('./public/src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/src/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// html browser sync
gulp.task('html', function() {
    return gulp.src('./**/*.html')
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('browserSync', gulp.series('html', function(){
    return browserSync.init({
        port: 8000,
        server: {
            baseDir: './public/src/'
        }
    });
}));

// watch
gulp.task('watch', async function() {
    gulp.watch('./public/src/**/*.html', gulp.parallel('html'));
    gulp.watch('./public/src/**/*.scss', gulp.parallel('sass'));
});

// all task
gulp.task('start', gulp.parallel('browserSync', 'watch', 'sass'));


