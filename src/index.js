import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import swapi from './reducers';
import App from './App';
import './index.css';


const store = createStore(swapi, applyMiddleware(promise(), logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
