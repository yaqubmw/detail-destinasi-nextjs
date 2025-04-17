"use client";

import { Destination } from "@/types/destination";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Icon, LatLngExpression } from "leaflet";

interface MapProps {
  destinations: Destination[];
  onSelect: (destination: Destination) => void;
  onHover: (destination: Destination | null) => void;
}

const defaultIcon: Icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map({ destinations, onSelect, onHover }: MapProps) {
  const center: LatLngExpression = [
    destinations[0].coordinates.lat,
    destinations[0].coordinates.lng,
  ];

  return (
    <div className="h-96 w-full rounded-md bg-red-500">
      <MapContainer
        center={center}
        zoom={8}
        scrollWheelZoom={false}
        className="h-full w-full rounded-md z-0 bg-red-500"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {destinations.map((destination) => (
          <Marker
            key={destination.id}
            position={[
              destination.coordinates.lat,
              destination.coordinates.lng,
            ]}
            icon={defaultIcon}
            eventHandlers={{
              mouseover: () => onHover(destination),
              mouseout: () => onHover(null),
              click: () => onSelect(destination),
            }}
          >
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
