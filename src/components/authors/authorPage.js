"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var createReactClass = require('create-react-class');
var Link = require('react-router-dom').Link;
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList'); // eslint-disable-line no-unused-vars

var AuthorPage = createReactClass({

    //react lifecycle method
    getInitialState: function() {
        return {
            authors: []
        };
    },

    //react lifecycle method - gets called right before the render
    componentDidMount: function() {
        // if this was for real, this would be an async AJAX call
        //  populate this component state with a list of authors
        if (this.isMounted()) {
            this.setState({authors: AuthorApi.getAllAuthors()});
        }
    },

	render: function() {
		return (
           <div>
               <h1>Authors</h1>
               <Link to="author" className="btn btn-default">Add Author</Link>
               <AuthorList authors={this.state.authors} />
            </div>
		);
	}
});

module.exports = AuthorPage;
