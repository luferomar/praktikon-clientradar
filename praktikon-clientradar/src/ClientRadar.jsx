import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const ClientRadar = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.08175, 4.60971],
      zoom: 11
    });

    const zonasCalientes = [
      { lng: -74.1168, lat: 4.7447, label: "Suba Rincón" },
      { lng: -74.045, lat: 4.7109, label: "Cedritos" },
      { lng: -74.093, lat: 4.676, label: "Centro Comercial Titán" }
    ];

    zonasCalientes.forEach(zona => {
      new mapboxgl.Marker().setLngLat([zona.lng, zona.lat]).setPopup(new mapboxgl.Popup().setText(zona.label)).addTo(map.current);
    });
  }, []);

  return (
    <div>
      <h2>🔎 Radar Edison</h2>
      <div ref={mapContainer} style={{ height: "80vh" }} />
    </div>
  );
};

export default ClientRadar;