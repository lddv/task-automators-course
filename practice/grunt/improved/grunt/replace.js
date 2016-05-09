/*
  Here we are going to change the index.html file to point for JS and CSS files according to environment.
*/
module.exports = {
  development: {
    src: [
      "index.html"
    ],
    overwrite: true,
    replacements: [
      {
        from: /dist\//g,
        to: "src/"
      }
    ]
  },
  production: {
    src: [
      "index.html"
    ],
    overwrite: true,
    replacements: [
      {
        from: /src\//g,
        to: "dist/"
      }
    ]
  }
};
