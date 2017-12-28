"use strict";

var React = require('react'); // eslint-disable-line no-unused-vars
var createReactClass = require('create-react-class');
var TextInput = require('../common/textInput'); // eslint-disable-line no-unused-vars

var AuthorForm = createReactClass({
    render: function() {
        return (
            <form>
                <TextInput
                    name="firstName"
                    label=" First Name"
                    onChange={this.props.onChange}
                    value={this.props.author.firstName}/>

                <TextInput
                    name="lastName"
                    label=" Last Name"
                    onChange={this.props.onChange}
                    value={this.props.author.lastName}/>

                <input
                    type="submit" value="Save"
                    className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = AuthorForm;