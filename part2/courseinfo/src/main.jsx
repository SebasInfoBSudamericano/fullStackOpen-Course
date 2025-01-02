import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia la importación
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Usa createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
