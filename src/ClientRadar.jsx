

import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function ClientRadar() {
  useEffect(() => {
    if (!navigator.geolocation) {
      alert('La geolocalización no es soportada por tu navegador');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [longitude, latitude],
          zoom: 14,
        });

        new mapboxgl.Marker({ color: 'red' })
          .setLngLat([longitude, latitude])
          .setPopup(new mapboxgl.Popup().setText('Ubicación actual'))
          .addTo(map);
      },
      (error) => {
        console.error('Error al obtener ubicación:', error);
        alert('No se pudo obtener la ubicación');
      },
      { enableHighAccuracy: true }
    );
  }, []);

  function funcion1() {
    alert('Función 1 ejecutada');
  }

  function funcion2() {
    alert('Función 2 ejecutada');
  }

  function funcion3() {
    alert('Función 3 ejecutada');
  }

  return (
    <>
      <div className="panel-edison">
        <h3>Panel Edison</h3>
        <button onClick={funcion1}>Función 1</button>
        <button onClick={funcion2}>Función 2</button>
        <button onClick={funcion3}>Función 3</button>
      </div>
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </>
  );
}

export default ClientRadar;



