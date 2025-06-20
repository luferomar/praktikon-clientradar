// src/ClientRadar.jsx
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './index.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function ClientRadar() {
  const [map, setMap] = useState(null);
  const [userMarker, setUserMarker] = useState(null);

  useEffect(() => {
    const initializeMap = ({ lng, lat }) => {
      const mapInstance = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: 14
      });

      const marker = new mapboxgl.Marker({ color: 'blue' })
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setText('Estás aquí'))
        .addTo(mapInstance);

      setMap(mapInstance);
      setUserMarker(marker);

      // Zona caliente de ejemplo
      new mapboxgl.Marker({ color: 'red' })
        .setLngLat([-74.1, 4.7])
        .setPopup(new mapboxgl.Popup().setText('Zona caliente'))
        .addTo(mapInstance);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          initializeMap({ lat: latitude, lng: longitude });
        },
        () => {
          alert('No se pudo obtener la ubicación.');
          initializeMap({ lat: 4.7, lng: -74.1 }); // valor por defecto
        }
      );
    } else {
      alert('Geolocalización no disponible');
      initializeMap({ lat: 4.7, lng: -74.1 });
    }
  }, []);

  const handleFuncion1 = () => {
    alert('Función 1 activada');
  };

  const handleFuncion2 = () => {
    alert('Función 2 activada');
  };

  const handleFuncion3 = () => {
    alert('Función 3 activada');
  };

  return (
    <>
      <div className="panel-edison">
        <h3>Panel Edison</h3>
        <button onClick={handleFuncion1}>Función 1</button>
        <button onClick={handleFuncion2}>Función 2</button>
        <button onClick={handleFuncion3}>Función 3</button>
      </div>
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </>
  );
}

export default ClientRadar;





