import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from '../redux/store';
import '../static/styles/app.scss';
import '../static/styles/loader.scss';
import Home from './Home';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Home />
    </Router>
  </Provider>
);
export default App;
