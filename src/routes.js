"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var Switch = require('react-router-dom').Switch;
var Route = require('react-router-dom').Route;
var createReactClass = require('create-react-class');

// when path is missing on the route, it uses "name" as the path
var AppRoutes = function(){
        <main>
            <Switch>
                <Route exact path="/" component={require('./components/homePage')} />
                <Route path="/authors" component={require('./components/authors/authorPage')} />
                <Route path="/about" component={require('./components/about/aboutPage')} />
            </Switch>
        </main>
}

module.exports = AppRoutes;