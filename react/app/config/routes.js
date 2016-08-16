import React from 'react';
import Main from '../components/Main';
import Home from '../components/container/Home';
import { Router,browserHistory,Route,IndexRoute } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}></IndexRoute>
    </Route>
  </Router>
);
