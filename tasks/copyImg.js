const gulp = require('gulp');

gulp.task('copyImg', function() {
  gulp.src('app/img/*.{jpg,png,svg,jpeg}')
  .pipe(gulp.dest('app/dist/img'));
});
