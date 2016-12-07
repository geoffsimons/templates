'use strict';

const gulp   = require('gulp');
const eslint = require('gulp-eslint');
const mocha  = require('gulp-mocha');

gulp.task('lint', function() {
  gulp.src([ '**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('test', function() {
  gulp.src('./test/*.js', { read: false })
  .pipe(mocha({ reporter: 'spec'}));
  //TODO: Try nyan reporter.
});

//TODO: Experiment with a 'delayed' task to see if tasks run
//      in parallel or serial.

gulp.task('dev', function() {
  gulp.watch(['**/*.js', '!node_modules/**'], ['lint', 'test']);
});

gulp.task('default', ['dev']);
