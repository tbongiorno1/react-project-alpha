import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main.jsx';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';
import Booklist from '../components/BookList.jsx';
import BookView from '../components/BookView.jsx';
import requireAuth from '../utils/auth.js';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
        <Route path="BookList" component={Booklist} onEnter={requireAuth}/>
        <Route path="BookView" component={BookView} />
      </Route>
    </Router>
  );
}

export default Routes;
