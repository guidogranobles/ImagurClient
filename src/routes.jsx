var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var BrowserHistory = ReactRouter.browserHistory;
var Main = require('./components/main');
var Topic = require('./components/topic');

module.exports = (
   <Router history={BrowserHistory}>
      <Route path="/" component={Main}>
          <Route path="topics" component={Topic} />
      </Route>
   </Router>
);
