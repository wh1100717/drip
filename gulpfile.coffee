'use strict'

gulp = require 'gulp'
stylus = require('gulp-stylus')
browserSync = require('browser-sync')
reload = browserSync.reload

gulp.task 'stylus', ->
    gulp.src(['showcase/css/**/*.styl'])
        .pipe(stylus())
        .pipe(gulp.dest('showcase/css'))

gulp.task 'serve', ->
    browserSync {
        notify: false
        port: 9000
        server: {
            baseDir: ['showcase']
        }
    }
    gulp.watch './**/*.styl', ['stylus']
    gulp.watch([
        './showcase/css/**/*.css'
        './showcase/**/*.html'
        './showcase/**/*.js'
    ]).on('change', reload)

gulp.task 'default', ['stylus', 'serve']