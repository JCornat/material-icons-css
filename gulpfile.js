var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var compass = require('gulp-compass');
var cleanCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(compass({
            css: 'css',
            sass: 'scss',
            image: 'img'
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'));
});

gulp.task('style', ['sass'], function() {
    return gulp.src('css/style.css')
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['style']);
