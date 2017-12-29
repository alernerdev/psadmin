"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs local dev server
var open = require('gulp-open'); //open a URL in a web browser
var browserify = require('browserify'); // bundles JS
var reactify = require('reactify'); //transforms JSX to JS
var source = require('vinyl-source-stream'); // use conventional text streams with Gulp
var concat = require('gulp-concat'); // concats files
var lint = require('gulp-eslint'); // lints js and jsx files
var log = require('fancy-log'); // loging from gulp -> console plus timestamp
var bytediff = require('gulp-bytediff'); // shows before/after size difference
var cleanCSS = require('gulp-clean-css'); // css minifier
var rename = require("gulp-rename"); // file renaming
var less = require('gulp-less'); // convert less files to css

var config = {
    port: 9005,
    devBaseUrl: "http://localhost",
    paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		images: './src/images/*',
		mainJs: './src/main.js',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'node_modules/bootstrap/dist/css/bootstrap.min.css'
		],
		less: 'node_modules/toastr.less',
        dist: './dist',
    }
}

// start local dev server
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

// get the index.html and open it at the url/port
// notice the dependency on the connect taskm
gulp.task('open', ['connect'],function() {
	var options = {
		uri: config.devBaseUrl + ':' + config.port + '/',
		app: 'firefox'
	}
    gulp.src('dist/index.html')
        .pipe(open(options));
});

// move html files from src to dist and reload
gulp.task('html', function() {
    gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

/*
	-package starting from main
	- convert jsx to js
	- bundle it
	- copy bundle.js over to dist directory
*/
gulp.task('js', function() {
	log.info('Bundling js files');

	browserify(config.paths.mainJs)
		.transform(reactify).bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('less', function () {
    log.info('Bundling Less files');

    gulp.src(config.paths.less)
		//.pipe(less())
		.pipe(less().on('error', log))
        .pipe(gulp.dest(config.paths.dist + '/css'));
		//.pipe(bytediff.start())
		//.pipe(cleanCSS({compatibility: '*'}))
        //.pipe(bytediff.stop(bytediffFormatter))
        //.pipe(rename('toastr.min.css'));
        //.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('css', ['less'], function() {
	log.info('Bundling CSS files');

	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function() {
	log.info('Bundling images');

	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload());

	gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('eslint', function() {
	log.info("linting...")

	return gulp.src([config.paths.js, '!node_modules/**'])
		.pipe(lint())
		.pipe(lint.format())
		.pipe(lint.failAfterError());
});

// whenever something changes, run the html task
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js','eslint']);
});



// this is what gets run by default by just saying gulp
gulp.task('default', ['html', 'js', 'less', 'css', 'images', 'eslint', 'open', 'watch']);

/**
 * Formatter for bytediff to display the size changes after processing
 * @param  {Object} data - byte data
 * @return {String}      Difference in bytes, formatted
 */
function bytediffFormatter(data) {
    var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    return data.fileName + ' went from ' +
        (data.startSize / 1000).toFixed(2) + ' kB to ' + (data.endSize / 1000).toFixed(2) + ' kB' +
        ' and is ' + formatPercent(1 - data.percent, 2) + '%' + difference;
}

/**
 * Format a number as a percentage
 * @param  {Number} num       Number to format as a percent
 * @param  {Number} precision Precision of the decimal
 * @return {Number}           Formatted perentage
 */
function formatPercent(num, precision) {
    return (num * 100).toFixed(precision);
}
