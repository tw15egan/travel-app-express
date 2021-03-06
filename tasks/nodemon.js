const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('nodemon', ['build'], () => {

  let started = false;
  const stream = nodemon({
    script: './app/bin/www',
  })
  .on('start', function() {
    if (!started) {
      started = true;
      cb();
    } else {
      browserSync.reload({ stream: false });
    }
  });

  return stream;
});
