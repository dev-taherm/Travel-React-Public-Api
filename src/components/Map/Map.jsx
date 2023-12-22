import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./style.css";
export default function Map({
  coords,
  setCoords,
  setBounds,
  places,
  setChildClicked,
}) {
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
        // options={""}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          if (e.marginBounds && e.marginBounds.sw) {
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places &&
          places.length &&
          places.map((place, i) => (
            <div
              className="markerContainer"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!matches ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className="paper">
                  <Typography
                    className="typography"
                    variant="subtitle2"
                    gutterBottom
                  >
                    {place.name}
                  </Typography>
                  <img
                    className="pointer"
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "/default.png"
                    }
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
}
