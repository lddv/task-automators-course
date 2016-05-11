var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint');

var jsfiles = './src/js/*.js';

gulp.task('log', function() {
  return gutil.log(gutil.colors.red('Gulp'), gutil.colors.green('is running!'));
});

// npm install jshint gulp-jshint jshint-stylish --save-dev
gulp.task('lint', function () {
  gulp.src(jsfiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('default', ['log'], function() {
  gutil.log('Thanks for using', gutil.colors.red('Gulp!'));
});
