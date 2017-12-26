// this is the starting point for browserify packaging
$ = jQuery = require('jquery');
var React = require('react'); // eslint-disable-line no-unused-vars
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var AuthorPage = require('./components/authors/authorPage');
var Header = require('./components/common/header'); // eslint-disable-line no-unused-vars

(function(win) {
	"use strict";

	var App = createReactClass({ // eslint-disable-line no-unused-vars
		render: function() {
			var Child;
			switch (this.props.route) {
				case 'about':
					Child = About;
				break;
				case 'authors':
					Child = AuthorPage;
				break;
				
				default:
					Child = Home;
				break;
			}

			return (
				<div>
					<Header />
					<Child />
				</div>
			);
		}
	});

	function render() {
		var route = window.location.hash.substr(1);
		ReactDOM.render(<App route={route} />, document.getElementById("app"));
	}

	win.addEventListener('hashchange', render);
	render();
})(window);
