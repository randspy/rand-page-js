'use strict';

var gulp = require('gulp');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};


require('require-dir')('./gulp');

var ngmin = require("gulp-ngmin");
var karma = require('karma').server;

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('move', function() {
  return gulp.src('src/assets/**/*')
    .pipe(gulp.dest('dist/assets/'));
});

gulp.task('deploy', ['build'], function () {
  return gulp.src("./dist/**/*");
});

gulp.task("js", ['clean'], function() {
  gulp.src(["src/**/*"])            // Read the files
    .pipe(gulp.dest("dist"));            // Write non-minified to disk
    //.pipe(uglify());                     // Minify
    //.pipe(rename({extname: ".min.js"})) // Rename to ng-quick-date.min.js
    //.pipe(gulp.dest("dist"))            // Write minified to disk
});
