/*
  This defines default task

  To run it:
  - grunt
*/
module.exports = function(grunt) {
  "use strict";

  /* We are calling replace and compass tasks but only development subtasks */
  grunt.registerTask("default", ["compass:development", "replace:development", "watch"]);
};
