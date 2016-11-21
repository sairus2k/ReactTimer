const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const Main = require('Main');
const Timer = require('./components/Timer');
const Countdown = require('./components/Countdown');

require('foundation-sites/dist/foundation.min.css');
require('./styles/app.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>
      <Route path='countdown' component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
