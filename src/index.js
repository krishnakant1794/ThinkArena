// src/index.js (CORRECTED CODE)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// CHANGE THIS LINE: Import HashRouter and alias it as Router
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Keep wrapping App with Router here */}
    <Router> 
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();