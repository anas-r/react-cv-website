import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './main.css';
import App from './App';

document.title = "rachyd.works - Mon CV en ligne !"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);