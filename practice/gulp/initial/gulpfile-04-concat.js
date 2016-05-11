var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint');
    concat = require('gulp-concat');

var jsfiles = './src/js/*.js';

gulp.task('log', function() {
  return gutil.log(gutil.colors.red('Gulp'), gutil.colors.green('is running!'));
});

gulp.task('lint', function () {
  gulp.src(jsfiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('concat', function () {
  gulp.src('src/js/*.js')
  .pipe(concat('all.min.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch(jsfiles, ['lint']);
});

gulp.task('default', ['log', 'watch'], function() {
  gutil.log('Thanks for using', gutil.colors.red('Gulp!'));
});
