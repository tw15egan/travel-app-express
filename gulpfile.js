'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir')('./tasks');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('build', ['clean', 'scripts', 'copyImg', 'styles', 'html']);

gulp.task('watch', () => {
  gulp.watch('app/scripts/**/*.*', ['scripts', reload]);
  gulp.watch('app/scss/**/*.scss', ['styles', reload]);
  gulp.watch('app/views/*.html', ['html', reload]);
});

gulp.task('default', ['watch', 'nodemon'], () => {
  browserSync.init({
    proxy: 'http://localhost:7777',
    open: false,
  });
});
