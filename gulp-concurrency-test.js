'use strict';

const gulp   = require('gulp');

// ------------ Testing when tasks in a chain fire ------------

// I needed to lookup how to callback in the gulp API docs.
// Turns out that you just pass that into the task's function.

// More from the API doc:
// Note: By default, tasks run with maximum concurrency
// -- e.g. it launches all the tasks at once and waits for nothing.

// Therefore, my question is answered, even if the code
//  below did not work, it was the error message that
//  took me to the docs where I found the answer.

//This task does not currently work.
gulp.task('delayed', function(callback) {
  setTimeout(function() {
    // How do we tell the task that it's done?
    callback();
  }, 1000); //Delay 1 second
});

gulp.task('immediate', function() {
  //Do nothing to let the task complete as fast as possible.
});

gulp.task('default', ['delayed', 'immediate']);
