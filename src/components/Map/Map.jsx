import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { styled, alpha } from "@mui/material/styles";
import "./style.css";
export default function Map({ coords, setCoords, setBounds }) {
  const matches = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCPv0IM57-JtKLf8H54qlbCJsTfXuN1H7M" }}
        defaultCenter={coordinates}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}
