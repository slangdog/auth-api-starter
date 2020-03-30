import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AuthContextProvider from './context/AuthContext';
import * as serviceWorker from './serviceWorker';

import './scss/index.scss';

import { PrivateRoute } from './helpers/PrivateRoute';

import LoginForm from './components/LoginForm';
import Home from './components/Home';

export const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <AuthContextProvider>
      <Switch>
        <Route exact path="/" component={ LoginForm } />
        <PrivateRoute exact path="/home" component={ Home } />
      </Switch>
    </AuthContextProvider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();