import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/app';
import reducer from './reducers';
import InitialState from './utils/InitialState';

const myStore = createStore(reducer, InitialState);
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
