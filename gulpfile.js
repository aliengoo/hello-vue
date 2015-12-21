"use strict";

var gulp = require('gulp');
var lp = require('gulp-load-plugins')({
  lazy: true
});
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var path = require('path');
var source = require('vinyl-source-stream');

var WindowsToaster = require('node-notifier').WindowsToaster;
var notifier = new WindowsToaster({
  withFallback: true
});

gulp.task('vendor:css', function () {
  var src = [
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/animate.css/animate.css'
  ];

  return gulp.src(src)
    .pipe(lp.concat('vendor.css'))
    .pipe(gulp.dest("public/css"));
});

gulp.task("build:js", function (done) {
  var args = watchify.args;
  args.extensions = ['.js'];

  watchify(browserify(path.join("./src", "main.js"), args), args)
    .transform(babelify)
    .bundle()
    .on('error', function(err){
      console.error(err.message);
      notifier.notify({
        title: "build:js",
        message: err.message,
        icon: path.join(__dirname,'.things/icons/browserify.png')
      });
      done();
    })
    .pipe(source("app.js"))
    .pipe(gulp.dest("./public/js"))
    .pipe(lp.livereload()).on('end', function(){
    notifier.notify({
      title: "build:js",
      message: "Browserify finished",
      icon: path.join(__dirname,'.things/icons/browserify.png')
    });
    done();
  });
});

gulp.task('default', ['vendor:css', 'build:js'], function () {
  lp.livereload({
    start: true
  });
  gulp.watch(['src/**/*.js'], ["build:js"]);
  gulp.watch('src/**/*.scss', ["build:css"]);
});



