"use strict";

var React = require('react'); /* eslint-disable-line no-unused-vars */
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var TextInput = createReactClass({
    propTypes : {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        error: PropTypes.string
    },

    render: function() {
        /* if error text is set, I want the bootstrap class that draws a red line
        around the text field where the error is
        */
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + "has-error";
        };

        return (
            <div className={wrapperClass} >
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field"> {/* field is a bootstrap class*/}
                    <input type="text"
                    name={this.props.name}
                    className="form-control"
                    placeholder={this.props.placeholder}
                    ref={this.props.name}
                    /* this is the keystroke callback*/
                    onChange={this.props.onChange}
                    value={this.props.value}/>
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
});

module.exports = TextInput;