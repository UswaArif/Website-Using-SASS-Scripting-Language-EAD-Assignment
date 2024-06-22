const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cleanCss = require('gulp-clean-css');

gulp.task('styles', () => {
    return gulp.src('C:/Users/HP/Documents/uswa/sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCss())
        .pipe(gulp.dest('C:/Users/HP/Documents/uswa/sass'));
});

gulp.task('watch', () => {
    gulp.watch('C:/Users/HP/Documents/uswa/sass/styles.scss', gulp.series('styles'));
});

gulp.task('default', gulp.series('styles', 'watch'));
