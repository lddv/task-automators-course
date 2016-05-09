module.exports = {
  development: {
    options: {
      specify: "src/styles/sass/main.scss",
      sassDir: "src/styles/sass",
      cssDir: "src/styles/",
      noLineComments: false,
      outputStyle: "expanded",
      environment: "development"
    }
  },
  production: {
    options: {
      specify: "src/styles/sass/main.scss",
      sassDir: "src/styles/sass",
      cssDir: "dist/styles/",
      noLineComments: true,
      outputStyle: "compressed",
      environment: "production"
    }
  }
};