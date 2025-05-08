import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Cambiado a `createRoot`
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Usamos `createRoot` en lugar de `render`

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
