/*
  This defines build task for production

  To run it:
  - grunt build
*/
module.exports = function(grunt) {
  "use strict";

  /* 
    We are calling replace and compass tasks but only production subtasks
  */
  grunt.registerTask("build", ["compass:production", "uglify", "replace:production"]);
};
