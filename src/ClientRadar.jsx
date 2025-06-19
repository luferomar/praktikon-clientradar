
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function ClientRadar() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.1, 4.7], // Bogotá
      zoom: 12
    });

    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([-74.1, 4.7])
      .setPopup(new mapboxgl.Popup().setText('Zona caliente'))
      .addTo(map);
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }} />;
}

export default ClientRadar;
