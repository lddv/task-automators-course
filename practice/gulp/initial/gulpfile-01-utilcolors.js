var gulp = require('gulp'),
    gutil = require('gulp-util');

gulp.task('log', function() {
  return gutil.log(gutil.colors.red('Gulp'), gutil.colors.green('is running!'));
});

gulp.task('default', ['log'], function() {
  gutil.log('Thanks for using', gutil.colors.red('Gulp!'));
});
