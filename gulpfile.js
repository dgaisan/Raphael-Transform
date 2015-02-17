/**
 * Created by Dmitri on 2/17/2015.
 */
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
        .pipe(browserify({}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('copySrc', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('lint', function() {
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint', 'browserify', 'copySrc']);
gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});