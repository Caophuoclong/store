import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom"
import { toast } from "react-toastify"
import GlobalStyle from "Global"
import { StoreProvider } from "StoreContext";
toast.configure({
  autoClose: 1000,
  draggable: true,
  position: "top-right",

  //etc you get the idea
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle>
        <StoreProvider>
          <App />
        </StoreProvider>
      </GlobalStyle>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
