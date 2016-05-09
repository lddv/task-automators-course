module.exports = {
  options: {
    jshintrc: ".jshintrc",
    /* This is to make output beautiful */
    reporter: require("jshint-stylish")
  },
  common: {
    src: [
      "Gruntfile.js",
      "grunt/**/*.js"
    ]
  },
  app: {
    src: [
      "src/scripts/*.js"
    ]
  }
};
