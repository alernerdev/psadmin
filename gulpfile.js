"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs local dev server
var open = require('gulp-open'); //open a URL in a web browser
var browserify = require('browserify'); // bundles JS
var reactify = require('reactify'); //transforms JSX to JS
var source = require('vinyl-source-stream'); // use conventional text streams with Gulp
var concat = require('gulp-concat'); // concats files

var config = {
    port: 9005,
    devBaseUrl: "http://localhost",
    paths: {
		html: './src/*.html',
		js: '/src/**/*.js',
		mainJs: './src/main.js',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'node_modules/bootstrap/dist/css/bootstrap.min.css'
		],
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
		url: config.devBaseUrl + ':' + config.port + '/'
	}
    gulp.src('dist/index.html')
        .pipe(open('<%file.path%>', options));
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
	browserify(config.paths.mainJs)
		.transform(reactify).bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

// whenever something changes, run the html task
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

// this is what gets run by default by just saying gulp
gulp.task('default', ['html', 'js', 'css', 'open', 'watch']);
