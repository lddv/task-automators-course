/*
  Created by eloizio 05-09-16
*/
module.exports = function(grunt) {
  "use strict";

  /* 
    This plugin is responsible for loading tasks accordingly 
    to package.json file, instead of doing loadNpmTasks for 
    all your packages.

    More info: https://github.com/sindresorhus/load-grunt-tasks
  */
  require("load-grunt-tasks")(grunt);

  /* 
    This plugin is responsible for modularizing Grunt Tasks, ie,
    we can put each task file separately from Grunt Config File.

    More info: https://github.com/firstandthird/load-grunt-config
  */
  require("load-grunt-config")(grunt);

  /* 
    Configs Grunt to load it's tasks from a folder, instead of putting all of them here

    More info: http://gruntjs.com/api/grunt.task#grunt.task.loadtasks
   */
  grunt.task.loadTasks("grunt/tasks");
};
