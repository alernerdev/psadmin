// this is the starting point for browserify packaging

/* eslint-disable no-unused-vars */

"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var HashRouter = require('react-router-dom');
var App = require('./components/app');

/*
Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});
*/

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'));