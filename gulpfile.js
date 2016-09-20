var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('default', ['dev']);
gulp.task('server', ['webserver']);

gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      host: 'localhost',
      port: 8888,
      fallback: 'index.html'
    }));
});

gulp.task('dev', function () {
  console.log('Hello world');
});
