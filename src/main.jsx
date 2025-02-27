import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/Login_styles.css';
import './styles/RegisterStyle.css';
import './styles/ResetPassword.css';
import './styles/ProductCatalog.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
