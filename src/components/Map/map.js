import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import './map.css';

import React from 'react';

const MapComponent = () => {
  return (
    <div className="mapc">
        <MapContainer center={[0.800986938985326, 34.016666397191244]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={[0.800986938985326, 34.016666397191244]}>
            <Popup>
              Nurture Organization
            </Popup>
          </Marker>
        </MapContainer>
    </div>
  );
}

export default MapComponent;