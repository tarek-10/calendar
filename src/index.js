import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Provider} from "react-redux"
import "react-datepicker/dist/react-datepicker.css";

/* bootstrap setup */

import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js"
import './index.css';
import store from './components/Store/Store.jsx';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>  <App />  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

