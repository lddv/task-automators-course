var gulp = require('gulp'),
    gutil = require('gulp-util');

gulp.task('log', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('default', ['log'], function() {
  gutil.log('Thanks for using Gulp!');
});
