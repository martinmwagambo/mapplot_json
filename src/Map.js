import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ data }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      const mbAttr =
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

      const map = L.map('map').setView([37.7749, -122.4194], 2);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: mbAttr,
      }).addTo(map);

      setMap(map);
    } else {
      data.forEach(({ latitude, longitude }) => {
        const marker = L.marker([latitude, longitude]).addTo(map);
      });
    }
  }, [data, map]);

  return <div id="map" style={{ height: '500px' }} />;
};

export default Map;