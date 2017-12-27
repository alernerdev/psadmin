"use strict";

var React = require('react'); /* eslint-disable-line no-unused-vars */
var createReactClass = require('create-react-class');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = createReactClass({
    getInitialState: function() {
        return {
            author: { id: '', firstName: '', lastName: ''}
        }
    },

    // this gets called for every keystroke in the child form
    // because we pass it into the child form
    setAuthorState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    render: function() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState} />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;