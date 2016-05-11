// Aqui nós carregamos o gulp e os plugins através da função `require` do nodejs
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

// Definimos o diretorio dos arquivos para evitar repetição futuramente
var files = "./src/*.js";

//Aqui criamos uma nova tarefa através do ´gulp.task´ e damos a ela o nome 'lint'
gulp.task('lint', function() {

// Aqui carregamos os arquivos que a gente quer rodar as tarefas com o `gulp.src`
// E logo depois usamos o `pipe` para rodar a tarefa `jshint`
gulp.src(files)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

//Criamos outra tarefa com o nome 'dist'
gulp.task('dist', function() {

// Carregamos os arquivos novamente
// E rodamos uma tarefa para concatenação
// Renomeamos o arquivo que sera minificado e logo depois o minificamos com o `uglify`
// E pra terminar usamos o `gulp.dest` para colocar os arquivos concatenados e minificados na pasta build/
gulp.src(files)
  .pipe(concat('./dist'))
  .pipe(rename('dist.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist'));
});

//Criamos uma tarefa 'default' que vai rodar quando rodamos `gulp` no projeto
gulp.task('default', function() {

  // Usamos o `gulp.run` para rodar as tarefas
  // E usamos o `gulp.watch` para o Gulp esperar mudanças nos arquivos para rodar novamente
  gulp.run('lint', 'dist');
  gulp.watch(files, function(evt) {
    gulp.run('lint', 'dist');
  });
});



// sitepoint
// Let’s be a little more adventurous. We’ll look for new or changed image files in src/images, compress them and output to build/images. For this, we’ll need to install the gulp-changed and gulp-imagemin plug-ins:
//
// npm install gulp-changed --save-dev
// npm install gulp-imagemin --save-dev
// Next, add them as dependencies to the top of our gulpfile.js configuration file:

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
// And, create a new Gulp task to do the hard work:

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './src/images/**/*',
      imgDst = './build/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});
// Save gulpfile.js, then enter the following command:
// gulp imagemin
