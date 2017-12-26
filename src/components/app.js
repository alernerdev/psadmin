 /* eslint-disable strict*/ // 

$ = jQuery = require('jquery');
var React = require('react'); // eslint-disable-line no-unused-vars
var createReactClass = require('create-react-class');
var Header = require('./common/header'); // eslint-disable-line no-unused-vars
var AppRoutes = require('../routes');

var App = function()
{
            <div>
                <Header />
                <div className="container-fluid">
                    <AppRoutes />             
                </div>
            </div>
};

module.exports = App;