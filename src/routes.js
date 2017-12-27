"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var Switch = require('react-router-dom').Switch;
var Route = require('react-router-dom').Route;
var createReactClass = require('create-react-class');

var AppRoutes = createReactClass({
	render: function() {
		// notice the catchall / is at the bottom.
		return (
        <div>
            <Switch>
                <Route path="/authors" component={require('./components/authors/authorPage')} />
                <Route path="/about" component={require('./components/about/aboutPage')} />
                <Route path="/" component={require('./components/homePage')} />
            </Switch>
        </div>
		);
	}
});

module.exports = AppRoutes;
