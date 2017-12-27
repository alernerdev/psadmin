"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var createReactClass = require('create-react-class');
var Link = require('react-router-dom').Link;

var Home = createReactClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>React 16 Studies</h1>
				<p>React, React Router, and Flux for ultra responsive web apps</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
});

module.exports = Home;

