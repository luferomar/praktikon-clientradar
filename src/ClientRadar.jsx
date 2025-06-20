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

    // Centrar en la ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { longitude, latitude } = position.coords;
          map.setCenter([longitude, latitude]);

          new mapboxgl.Marker({ color: 'blue' })
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup().setText('Estás aquí'))
            .addTo(map);
        },
        error => console.error('Error en geolocalización:', error),
        { enableHighAccuracy: true }
      );
    }

    // Zona caliente fija
    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([-74.1, 4.7])
      .setPopup(new mapboxgl.Popup().setText('Zona caliente'))
      .addTo(map);
  }, []);

  // Funciones conectadas a los botones
  const handleFuncion1 = () => {
    alert('Función 1 activada: Panel de estadísticas futuras');
  };

  const handleFuncion2 = () => {
    alert('Función 2 activada: Configuración del conductor');
  };

  const handleFuncion3 = () => {
    alert('Función 3 activada: Escaneo de zonas activas');
  };

  return (
    <>
      <div className="panel-edison">
        <h3>Panel Edison</h3>
        <button onClick={handleFuncion1}>Función 1</button>
        <button onClick={handleFuncion2}>Función 2</button>
        <button onClick={handleFuncion3}>Función 3</button>
      </div>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
    </>
  );
}

export default ClientRadar;







