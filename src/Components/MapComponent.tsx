import { useContext, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { ContextApi } from "./Context";
interface centerProps {
  center: [number, number];
}
function UpdateMapView({ center }: centerProps) {
  const Map = useMap();
  Map.setView(center, Map.getZoom());
  return null;
}
export default function MapComponent() {
  const [location, setLocation] = useState({ lat: 27.0167, lon: 84.8667 });
  const receiveData = useContext(ContextApi);
  const targetLocation = receiveData?.location;
  useEffect(() => {
    if (targetLocation !== "" && targetLocation != undefined) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${targetLocation}&appid=b269285f8d27c66632175782a28f9c37&units=metric`
      ).then((response: Response) => {
        response.json().then((data) => {
          setLocation({ lat: data.coord.lat, lon: data.coord.lon });
        });
      });
    }
  }, [targetLocation]);

  return (
    <>
      <MapContainer
        center={[location.lat, location.lon]}
        zoom={7}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[location.lat, location.lon]}>
          <Popup>the location of {targetLocation}</Popup>
        </Marker>
        <UpdateMapView center={[location.lat, location.lon]} />
      </MapContainer>
    </>
  );
}
