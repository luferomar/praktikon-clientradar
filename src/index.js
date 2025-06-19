import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.css';  // ✅ esto aplica los estilos globalmente
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // tus estilos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
