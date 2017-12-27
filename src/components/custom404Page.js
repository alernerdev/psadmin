"use strict";

/* eslint-disable no-unused-vars */

var React = require('react');
var createReactClass = require('create-react-class');
var Link = require('react-router-dom').Link;

var Custom404Page = createReactClass({
    render: function() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Whoops.  Nothing to see here</p>
                <p><Link to="/">Back to Home</Link></p>
            </div>
        );
    }
});

module.exports = Custom404Page;
