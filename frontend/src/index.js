import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import store from './store'

import { positions, transitions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  transition: transitions.SCALE,

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <AlertProvider  template = {AlertTemplate} {...options} >
    <App />
    </AlertProvider>
  </Provider>
);
