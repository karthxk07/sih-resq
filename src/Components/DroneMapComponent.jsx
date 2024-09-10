// Import necessary components and hooks from React and react-leaflet
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issues in Leaflet with Webpack
import markerIconPng from "leaflet/dist/images/marker-icon.png";

// Create a functional component to render the map with markers
const DroneMap = ({ gpsLocation, humanCount }) => {
  return (
    <MapContainer
      center={gpsLocation}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      {/* Add a TileLayer to load and display map tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add a Marker to the map at the given GPS location */}
      <Marker position={gpsLocation} icon={L.icon({ iconUrl: markerIconPng })}>
        {/* Display a Popup when the marker is clicked, showing the human count */}
        <Popup>Number of humans detected: {humanCount}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default DroneMap;
