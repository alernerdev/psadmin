"use strict";

var React = require('react');
var createReactClass = require('create-react-class');

var Home = createReactClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Class Administration</h1>
				<p>React, React Router, and Flux for ultra responsive web apps</p>
			</div>
		);
	}
});

module.exports = Home;

