var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes');
var Api = require('./utils/api');

//var element = React.createElement(App, {});
ReactDOM.render(Routes, document.querySelector('.container'));
