import React from 'react';
import ReactDOM from 'react-dom/client';
import ClientRadar from './ClientRadar'; // Esto es clave
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ClientRadar />);

