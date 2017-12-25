// this is the starting point for browserify packaging
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var Home = require('./components/homePage');

ReactDOM.render(<Home />, document.getElementById('app'));
