const gulp = require('gulp')
const less = require('gulp-less')
const watch = require('gulp-watch')
const concat = require('gulp-concat');

gulp.task('less-compile', () => {
    return gulp.src('./public/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css/'))
})

gulp.task('js-compile', function () {
    return gulp.src('./public/javaScript-compile/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./public/javaScript/'));
});

gulp.task('watch', () => {
    gulp.watch('./public/less/**/*.less', gulp.series('less-compile')),
        gulp.watch('./public/javaScript-compile/**/*.js', gulp.series('js-compile'))
})