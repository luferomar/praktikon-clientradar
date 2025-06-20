// src/ClientRadar.jsx
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './index.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function ClientRadar() {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoords = [position.coords.longitude, position.coords.latitude];
        setUserLocation(userCoords);

        const mapInstance = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: userCoords,
          zoom: 14,
        });

        new mapboxgl.Marker({ color: 'blue' })
          .setLngLat(userCoords)
          .setPopup(new mapboxgl.Popup().setText('Ubicación actual'))
          .addTo(mapInstance);

        // Zona caliente fija (ejemplo)
        new mapboxgl.Marker({ color: 'red' })
          .setLngLat([-74.1, 4.7])
          .setPopup(new mapboxgl.Popup().setText('Zona caliente'))
          .addTo(mapInstance);

        setMap(mapInstance);
      },
      (error) => {
        alert('No se pudo obtener tu ubicación');
        console.error(error);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  const handleFunction = (id) => {
    switch (id) {
      case 1:
        alert('Función 1 activada: mostrar estadísticas por zona.');
        break;
      case 2:
        alert('Función 2 activada: analizar zonas activas.');
        break;
      case 3:
        alert('Función 3 activada: mostrar historial de viajes.');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="panel-edison">
        <h3>Panel Edison</h3>
        <button onClick={() => handleFunction(1)}>Función 1</button>
        <button onClick={() => handleFunction(2)}>Función 2</button>
        <button onClick={() => handleFunction(3)}>Función 3</button>
      </div>
      <div id="map" className="map-container" />
    </>
  );
}

export default ClientRadar;






