const gulp = require('gulp')
const less = require('gulp-less')
const watch = require('gulp-watch')
const concat = require('gulp-concat');

gulp.task('less-compile', () => {
    return gulp.src('./src/public/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/public/css/'))
})

gulp.task('js-compile', () => {
    return gulp.src('./src/public/javaScript-compile/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./src/public/javaScript/'));
});

gulp.task('watch', () => {
    gulp.watch('./src/public/less/**/*.less', gulp.series('less-compile')),
        gulp.watch('./src/public/javaScript-compile/**/*.js', gulp.series('js-compile'))
})