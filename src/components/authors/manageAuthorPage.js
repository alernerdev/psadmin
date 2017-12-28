"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom'); // eslint-disable-line no-unused-vars
var withRouter = require('react-router-dom');
var Prompt = withRouter.Prompt; 
var PropTypes = require('prop-types');

var AuthorForm = require('./authorForm'); // eslint-disable-line no-unused-vars
var AuthorApi = require('../../api/authorApi');

/* this code implements a form, but also shows how NOT to navigate from it if the data
is not saved*/

var ManageAuthorPage = createReactClass({
    propTypes : {
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            author: { id: '', firstName: '', lastName: ''},
            isBlocking: false
        }
    },

    // this gets called for every keystroke in the child form
    // because we pass it into the child form
    setAuthorState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;

        return this.setState(
            {author: this.state.author, isBlocking : this.isFormDirty(this.state.author)}
        );
    },

    // if any field in the author is dirty, the form is dirty
    isFormDirty : function(author) {
        for (var field in author) {
            var value = author[field];
            console.log("author field is " + field + " " + value);
            if (value.length > 0) {
                console.log("form is dirty, returning true");
                return true;
            }
        }

        console.log("form is clean, returning false");
        return false;
    },

    saveAuthor: function(event) {
        console.log("calling saveAuthor and blocking now is " + this.state.isBlocking);
        this.state.isBlocking = false;
        this.setState({isBlocking : this.state.isBlocking});
        console.log("I have set it to false and it is now " + this.state.isBlocking);

        // we dont want the submit button on the page to actually submit
        event.preventDefault();

        AuthorApi.saveAuthor(this.state.author);

        // this stuff comes in from withRouter
        var history = this.props.history;
        // after saving an author, transition to the list of authors page
        history.push('authors');
    },

    render: function() {
        // this stuff comes in from withRouter
        var location = this.props.location;

        var isBlocking = this.state.isBlocking;
        console.log("isBlocking in render is " + isBlocking);

        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave = {this.saveAuthor} />

                <Prompt
                    when={isBlocking} 
                    message = {"You havent saved your form data. Are you sure you want to go to " + location.pathname}
                    />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;