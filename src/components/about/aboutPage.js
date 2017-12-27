"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var createReactClass = require('create-react-class');

var About = createReactClass({

	getInitialState: function() {
		console.log("getInitialState is called");

        return {
            textValue: "blah"
        };
    },

	componentDidMount: function() {
		console.log("componentDidMount is called");
	
    },
	
	componentWillUnmount: function() {
		console.log("componentWillUnmount is called");
	},
	
	render: function() {
		return (
			<div>
				<h1>About</h1>
				<p>
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = About;

