import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Make sure App.js exists and is properly set up
import './index.css'; // Optional: Link to your global CSS if you have one

// Render the React application to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
