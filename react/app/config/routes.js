import React from 'react';
import Main from '../components/Main';
import Home from '../components/container/Home';
import MainLogin from '../components/container/login/MainLogin';
import { Router,browserHistory,Route,IndexRoute } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="home" component={Home}></Route>
      <IndexRoute component={MainLogin}></IndexRoute>
    </Route>
  </Router>
);
