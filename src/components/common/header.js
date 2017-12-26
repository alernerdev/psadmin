"use strict";

var React = require('react');
var createReactClass = require('create-react-class');

var Header = createReactClass({
	render: function() {
		return (
			<nav className = "navbar navbar-default">
                <div className = "container-fluid">
                    <a href="/" className = "navbar-brand">
                        <img src="images/doglogo.png" width="35px" height="35px"  />
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#authors">Authors</a></li>
                    </ul>
                </div>
			</nav>
		);
	}
});

module.exports = Header;