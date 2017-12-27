"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var createReactClass = require('create-react-class');
var Link = require('react-router-dom').Link;

var Header = createReactClass({
	render: function() {
		return (
			<nav className = "navbar navbar-default">
                <div className = "container-fluid">
                    {/* using react route links instead of the usual html anchors*/}
                    <Link to="/" className = "navbar-brand">
                        <img src="images/doglogo.png" width="35px" height="35px"  />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="authors">Authors</Link></li>
                    </ul>
                </div>
			</nav>
		);
	}
});

module.exports = Header;