var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

var config = {
	nodeDir: './node_modules'
}

gulp.task('jade', function() {
  var YOUR_LOCALS = {}; 
  gulp.src('./src/templates/index.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('sass', function () {
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/templates/*.jade', ['jade']);
    gulp.watch('./src/sass/*.scss', ['sass']);
});

gulp.task('default', ['jade','sass','watch']);