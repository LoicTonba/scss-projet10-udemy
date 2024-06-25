var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass')); // Ajoutez cette ligne pour définir le compilateur Sass
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('styles', () => {
    return gulp.src('css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'] // Utilisez overrideBrowserslist au lieu de browsers
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('build'))
        .on('end', () => console.log('Styles task completed and files are saved in build folder'));
});

gulp.task('watch', () =>
    gulp.watch('css/*.scss', gulp.series('styles'))
);
