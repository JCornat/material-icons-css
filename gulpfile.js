var gulp = require('gulp');
var concat = require('gulp-concat');
var compass = require('gulp-compass');
var cleanCSS = require('gulp-clean-css');

var filename = 'material-icons';

gulp.task('compass', function() {
    return gulp.src('scss/*.scss')
        .pipe(compass({
            css: 'css',
            sass: 'scss',
            image: 'img'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('minify', ['compass'], function() {
    return gulp.src('css/' + filename + '.css')
        .pipe(cleanCSS())
        .pipe(concat(filename + '.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['minify']);
