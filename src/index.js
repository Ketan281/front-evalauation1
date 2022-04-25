import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter
} from 'react-router-dom'
import {
  RegistrationContextProvider
} from './contexts/RegistrationContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegistrationContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    

    </RegistrationContextProvider>

  </React.StrictMode>
);
