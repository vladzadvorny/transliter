var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var es3ify = require('gulp-es3ify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

gulp.task('default', function() {
  return browserify('./lib/browser.js')
    .bundle()
    .pipe(source('transliter.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(es3ify())
    .pipe(gulp.dest('./dist/'))
    .pipe(rename('transliter.min.js'))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'))
    .pipe(gutil.noop());
});
