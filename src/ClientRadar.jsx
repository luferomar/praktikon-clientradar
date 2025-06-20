// src/ClientRadar.jsx
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './index.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function ClientRadar() {
  const [map, setMap] = useState(null);
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const mapInstance = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.1, 4.7],
      zoom: 12
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          mapInstance.setCenter([longitude, latitude]);

          new mapboxgl.Marker({ color: 'blue' })
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup().setText('Estás aquí'))
            .addTo(mapInstance);
        },
        (error) => console.error('Error en geolocalización:', error),
        { enableHighAccuracy: true }
      );
    }

    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([-74.1, 4.7])
      .setPopup(new mapboxgl.Popup().setText('Zona caliente'))
      .addTo(mapInstance);

    setMap(mapInstance);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulación GPT (reemplazar con API real en producción)
    const botMsg = {
      role: 'assistant',
      content: `Hola 👋, soy Edison. Recibí: "${input}". Aún no tengo conexión GPT activa, ¡pero pronto podré ayudarte mejor!`
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  return (
    <>
      <div className="panel-edison">
        <h3>Panel Edison</h3>
        <button onClick={() => alert("Función 1 activada")}>Función 1</button>
        <button onClick={() => alert("Función 2 activada")}>Función 2</button>
        <button onClick={() => alert("Función 3 activada")}>Función 3</button>
        <button
  className="floating-gpt-button"
  onClick={() => setChatVisible(!chatVisible)}
>
  💬
</button>

      </div>

      {chatVisible && (
        <div className="chat-edison">
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={msg.role}>{msg.content}</div>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe aquí..."
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      )}

      <div id="map" style={{ width: '100%', height: '100vh' }} />
    </>
  );
}

export default ClientRadar;








