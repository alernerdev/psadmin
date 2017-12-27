/* eslint-disable strict*/ //
/* eslint-disable no-unused-vars */

$ = jQuery = require('jquery');
var React = require('react');
var createReactClass = require('create-react-class');
var Header = require('./common/header');
var AppRoutes = require('../routes');

var App = createReactClass({
	render: function() {
		return (
            <div>
                <Header />
                <div className="container-fluid">
                    <AppRoutes />
                </div>
            </div>
		);
	}
});

module.exports = App;
