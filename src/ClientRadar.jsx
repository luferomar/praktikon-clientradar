// Reemplaza por completo el contenido actual de src/ClientRadar.jsx

import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function ClientRadar() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.1, 4.7],
      zoom: 12,
    });

    // Zona caliente estática
    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([-74.1, 4.7])
      .setPopup(new mapboxgl.Popup().setText('Zona caliente'))
      .addTo(map);

    // Localización del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { longitude, latitude } = position.coords;
        new mapboxgl.Marker({ color: 'blue' })
          .setLngLat([longitude, latitude])
          .setPopup(new mapboxgl.Popup().setText('Tu ubicación'))
          .addTo(map);
        map.flyTo({ center: [longitude, latitude], zoom: 14 });
      });
    }
  }, []);

  const handleFunction1 = () => {
    alert('Buscando zonas calientes activas...');
  };

  const handleFunction2 = () => {
    alert('Activando modo conducción...');
  };

  const handleFunction3 = () => {
    alert('Mostrando estadísticas de la zona...');
  };

  return (
    <>
      <div className="panel-edison">
        <h3>Panel Edison</h3>
        <button onClick={handleFunction1}>Función 1</button>
        <button onClick={handleFunction2}>Función 2</button>
        <button onClick={handleFunction3}>Función 3</button>
      </div>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
    </>
  );
}

export default ClientRadar;




