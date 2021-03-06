// Generated by CoffeeScript 1.9.1
'use strict';
var browserSync, gulp, reload, stylus;

gulp = require('gulp');

stylus = require('gulp-stylus');

browserSync = require('browser-sync');

reload = browserSync.reload;

gulp.task('stylus', function() {
  return gulp.src(['showcase/css/**/*.styl']).pipe(stylus()).pipe(gulp.dest('showcase/css'));
});

gulp.task('serve', function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['showcase']
    }
  });
  gulp.watch('./**/*.styl', ['stylus']);
  return gulp.watch(['./showcase/css/**/*.css', './showcase/**/*.html', './showcase/**/*.js']).on('change', reload);
});

gulp.task('default', ['stylus', 'serve']);
