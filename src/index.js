
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Amy from '../src/components/Amy';
import App from './App';
import HomePage from './screens/HomePage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
    <HomePage />
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
