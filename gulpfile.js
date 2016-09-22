var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename');

gulp.task('default', ['dev']);
gulp.task('dev', ['watch', 'js']);
gulp.task('server', ['webserver']);

gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      host: 'localhost',
      port: 8888,
      fallback: 'index.html'
    }));
});

gulp.task('js', function () {
  gulp.src('./javascripts/index.js')
    .pipe(browserify({
      transform: ['reactify'],
      extensions: ['.js']
    }))
    .on('error', console.log)
    .pipe(rename('app.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
  gulp.watch('./javascripts/**/*.js', ['js']);
});
