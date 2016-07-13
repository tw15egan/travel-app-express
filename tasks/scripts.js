const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('scripts', () => {
  return gulp.src('app/scripts/index.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('app/dist/js'));
});
