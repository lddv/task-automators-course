/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    coffee = require('coffee');

var beautify = require('gulp-beautify');
gulp.task('beautify', function() {
  // gulp.src('./src/*.js')
  //   .pipe(beautify({indentSize: 2}))
  //   .pipe(gulp.dest('./public/'))
});

var del = require('del');
gulp.task('emptyTrash', function () {
  return del([
    'dist',
    'src/trashbin/junk3.txt',        // delete this specific file
    'src/trashbin/old/**/*',          // delete whatever is inside trashbin/old
    '!src/trashbin/new/newjunk.txt'      // explicitly DO NOT delete this file
  ]);
});

gulp.task('coffee', function () {
  gulp.src('src/coffee/*.coffee')
  .pipe(coffee())
  .pipe(gulp.dest('dist'));
});

var es = require('event-stream');
// gulp.task('scripts', ['coffee'], function () {
gulp.task('scripts', function () {
  var taskCoffee = gulp.src('src/coffee/*.coffee').pipe(coffee()),  // files created in memory, just output when you do gulp.dest('dist')
      js = gulp.src('src/js/*.js');

  return es.merge(taskCoffee, js)
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));

  // // return for dependencies
  // return gulp.src('src/js/*.js')
  // // .pipe(coffee())                // not going to work, because we are not fetching the coffee file
  // .pipe(concat('all.min.js'))
  // .pipe(uglify())
  // .pipe(gulp.dest('dist'));
});

gulp.task('log', function() {
  return gutil.log('Gulp is running!')
});

// gulp.task('watch', function() {
//   gulp.watch('src/**/*.js', ['makeItUgly'])
// });

// https://youtu.be/jgcfEhiCkG4?t=12m2s
var rename = require('gulp-rename');
gulp.task('scripts', function () {
  gulp.src(['src/js/**/*.js', '!src/js/**/*/min.js'])
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('src/js'))
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.{js,coffee}', ['scripts'])
});

gulp.task('default', ['log', 'emptyTrash'], function() {
  gutil.log('Thanks for using Gulp!');
});
