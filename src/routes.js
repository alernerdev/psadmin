"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var Switch = require('react-router-dom').Switch; // eslint-disable-line no-unused-vars
var Route = require('react-router-dom').Route; // eslint-disable-line no-unused-vars
var Redirect = require('react-router-dom').Redirect; // eslint-disable-line no-unused-vars
var createReactClass = require('create-react-class');

var AppRoutes = createReactClass({
	render: function() {
		// notice the catchall / is at the bottom.
		return (
        <div>
            <Switch>
                {/*Named routes as in "<Route name="about"...  have been removed*/}
                <Route path="/authors" component={require('./components/authors/authorPage')} />
                <Route path="/author" component={require('./components/authors/manageAuthorPage')} />
                <Route path="/author:id" component={require('./components/authors/manageAuthorPage')} />
                {/* lets say there was an old link that needs retiring. Redirecting*/}
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
