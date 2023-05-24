import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//TOCHECK reportwebvitals 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// StrictMode is a React Developer Tool, primarily used to identify potential issues in a web application. 
// For its descendant components, it activates additional deprecation checks and warnings. 
// https://react.dev/reference/react/StrictMode 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 
// https://create-react-app.dev/docs/measuring-performance/
reportWebVitals();
