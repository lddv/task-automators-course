module.exports = {
  css: {
    /* Let's watch SASS files and generate CSS from Compass */
    files: "src/styles/sass/*.scss",
    tasks: ["compass:development"]
  },
  gruntFiles: {
    /* Let's watch even Gruntfile task files */
    files: [
      "grunt/**/*.js"
    ],
    tasks: ["jshint:common"]
  },
  js: {
    /* Let's watch our Javascript files */
    files: [
      "src/scripts/*.js"
    ],
    tasks: ["jshint:app"]
  }
};