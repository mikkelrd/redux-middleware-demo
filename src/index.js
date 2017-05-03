import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger'

import swapi from './reducers';
import App from './App';
import './index.css';


const store = createStore(swapi, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
