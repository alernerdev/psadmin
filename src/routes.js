"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var Switch = require('react-router-dom').Switch;
var Route = require('react-router-dom').Route;
var Redirect = require('react-router-dom').Redirect;
var createReactClass = require('create-react-class');

var AppRoutes = createReactClass({
	render: function() {
		// notice the catchall / is at the bottom.
		return (
        <div>
            <Switch>
                {/*Named routes as in "<Route name="about"...  have been removed*/}
                <Route path="/authors" component={require('./components/authors/authorPage')} />
                {/* lets say there was an old link that needs retiring*/}
                <Redirect from="/about-us" to="about" />
                 <Route path="/about" component={require('./components/about/aboutPage')} />
                {/* when using 'exact path' it doesnt route to home page when url is invalid */ }
                <Route exact path="/" component={require('./components/homePage')} />
                <Route path="/" component={require('./components/custom404Page')} />
            </Switch>
        </div>
		);
	}
});

module.exports = AppRoutes;
