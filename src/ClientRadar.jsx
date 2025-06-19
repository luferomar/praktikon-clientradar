// src/ClientRadar.jsx
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './index.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function ClientRadar() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.1, 4.7],
      zoom: 12
    });

    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([-74.1, 4.7])
      .setPopup(new mapboxgl.Popup().setText('Zona caliente'))
      .addTo(map);
  }, []);

  return (
    <div className="map-container">
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
      <div className="panel-edison">
        <h3>Panel Edison</h3>
        <button onClick={() => alert('Función 1')}>Función 1</button>
        <button onClick={() => alert('Función 2')}>Función 2</button>
        <button onClick={() => alert('Función 3')}>Función 3</button>
      </div>
    </div>
  );
}

export default ClientRadar;


