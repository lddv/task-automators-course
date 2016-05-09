module.exports = {
  options: {
    mangle: false,
    compress: {
      drop_console: true
    }
  },
  app: {
    files: [{
      expand: true,
      cwd: "src/scripts/",
      src: "*.js",
      dest: "dist/scripts/"
    }]
  }
};
