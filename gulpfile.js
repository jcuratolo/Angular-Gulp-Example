/**
 * This is a basic gulpfile showing a configuration for creating a build process
 * that copies assets to a build folder, converts html templates into js, and
 * places them in the template cache of a module. In this example, we tell
 * gulp-ng-html2js to use a module with the same name as our main module which
 * means we are adding the templates into the template cache of the main module. 
 */
var gulp = require('gulp');
var ngHtml2Js = require('gulp-ng-html2js');
var del = require('del');
var inject = require('gulp-inject');
var debug = require('gulp-debug');

/**
 * This task will run when you enter gulp at the command line without a task
 * name.
 */
gulp.task('default',['inject']);

/**
 * We set things up so everything will be run in the correct order using this
 * one task
 */
gulp.task('inject', ['html2js'], function() {
    return gulp.src('./build/index.html')
        .pipe(inject(gulp.src('./build/*.view.js'), {ignorePath: 'build'}))
        //.pipe(inject(gulp.src(tpl_src), {ignorePath: 'build'}))
        .pipe(gulp.dest('./build/'));
});

/**
 * Convert html templates to js Module name should be the same as main app
 * module.
 */
gulp.task('html2js', ['copy-assets'], function() {
    return gulp.src('*.view.html')
        .pipe(ngHtml2Js({
            moduleName: 'main',
            prefix: ''
        }))
        .pipe(gulp.dest('build/'));
});

/**
 * Copy-assets will only run after copy-js and copy-html are finished.
 */
gulp.task('copy-assets', ['copy-js', 'copy-html'], function() {

});

/**
 * Copy js files to build folder
 */
gulp.task('copy-js', ['clean'], function() {
    gulp.src(['./*.js', '!./gulpfile.js'])
        .pipe(gulp.dest('build/'));
});

/**
 * Copy html files to build folder. Exclude .view.html files (which are
 * templates) and will be handled later in the build process by gulp-ng-html2js
 */
gulp.task('copy-html', ['clean'], function() {
    gulp.src(['./*.html', '!*.view.html'])
        .pipe(gulp.dest('build/'));
});

/**
 * Clean out the build folder before a new build process. Just in case. Even
 * though both copy-js and copy-html depend on this task completing it will only
 * be run once.
 */
gulp.task('clean', function(cb) {
    del(['./build/*'], cb);
});
