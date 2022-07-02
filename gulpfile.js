var gulp = require('gulp')
var sass = require('gulp-sass')(require('sass'))
var cssnano = require('gulp-cssnano')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var cleandirectory = require('gulp-clean-dir')

gulp.task('workflow', () => {
        gulp.src('./src/sass/**/main.scss')
            // .pipe(cleandirectory('./dist'))
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(cssnano())
            .pipe(sourcemaps.write('./'))

            .pipe(gulp.dest('./dist/css/'))
    })

gulp.task('default', () => {
        gulp.watch('./src/sass/**/', gulp.series('workflow'))
    })