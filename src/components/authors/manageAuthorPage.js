"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom'); // eslint-disable-line no-unused-vars
var withRouter = require('react-router-dom');
var Prompt = withRouter.Prompt;
var PropTypes = require('prop-types');
var toaster = require('toastr');

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
            isBlocking: false,
            errors: {}
        }
    },

    // this gets called for every keystroke in the child form
    // because we pass it into the child form
    setAuthorState: function(event) {
        var field = event.target.name;
		var value = event.target.value;

		// treating state as immutable, making a copy of author
		var author  = Object.assign({}, this.state.author);
		author[field] = value;

		// and setting a new state
        return this.setState(
            {author: author, isBlocking : this.isFormDirty(author)}
        );
    },

    // if any field in the author is dirty, the form is dirty
    isFormDirty : function(author) {

        // TODO would like to get this working
        return false;

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

    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; // clear out previous errors if any

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = "First name must be at least chars long";
            formIsValid = false;
        }
        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = "Last name must be at least chars long";
            formIsValid = false;
        }
        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveAuthor: function(event) {
        // we dont want the submit button on the page to actually submit
		event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

		// call out to the database
        AuthorApi.saveAuthor(this.state.author);

        toaster.success('Author saved');

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
                    onSave = {this.saveAuthor}
                    errors = {this.state.errors}/>

                <Prompt
                    when={isBlocking}
                    message = {"You havent saved your form data. Are you sure you want to go to " + location.pathname}
                    />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;
