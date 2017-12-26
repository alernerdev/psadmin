"use strict";

var React = require('react');
var createReactClass = require('create-react-class');
var AuthorApi = require('../../api/authorApi');

var Authors = createReactClass({

    //react lifecycle method
    getInitialState: function() {
        return {
            authors: []
        };
    },

    //react lifecycle method - gets called right before the render
    componentWillMount: function() {
        // if this was for real, this would be an async AJAX call
        this.setState({authors: AuthorApi.getAllAuthors()});
    },

	render: function() {
        var createAuthorRow = function(author) {
            return (
                // key is needed by react 
                <tr key={author.id}>
                    <td>
                        <a href={"/#authors/" + author.id}>{author.id}</a>
                    </td>
                    <td>
                        {author.firstName} {author.lastName}
                    </td>
                </tr>
            );
        };
        
		return (
           <div> 
               <h1>Authors</h1>
               <table className = "table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {this.state.authors.map(createAuthorRow, this)}
                </tbody>
               </table>
           </div> 
		);
	}
});

module.exports = Authors;
