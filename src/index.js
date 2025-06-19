// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import ClientRadar from './ClientRadar'; // apunta a tu componente principal
import './index.css'; // si existe, o elimínalo si no lo usas

// Importa Mapbox CSS para desarrollo; el CDN en index.html cubrirá producción.
import 'mapbox-gl/dist/mapbox-gl.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ClientRadar />);
