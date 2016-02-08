var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');


gulp.task('compress', function() {
  gulp.src('API_Script/*.js')
    .pipe(concat('klenty_API.js'))
    .pipe(minify())
    .pipe(gulp.dest('public/js'))
});
gulp.task('watch',function () {
  gulp.watch('API_Script/*.js',['compress'])
})

gulp.task('default',['compress','watch']);
