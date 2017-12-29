"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var Link = require('react-router-dom').Link; // eslint-disable-line no-unused-vars

/* this component has markup only -- the data is passed into it */
var AuthorList = createReactClass({
    propTypes : {
        authors: PropTypes.array.isRequired
    },

	render: function() {
        var createAuthorRow = function(author) {
            return (
                // key is needed by react
                <tr key={author.id}>
                    <td>
                        <Link to="/author:id" params={{id: author.id}}>{author.id}</Link>
                    </td>
                    <td>
                        {author.firstName} {author.lastName}
                    </td>
                </tr>
            );
        };

		return (
           <div>
               <table className = "table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
               </table>
           </div>
		);
	}
});

module.exports = AuthorList;
