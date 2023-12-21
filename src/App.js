import { CssBaseline, Grid } from "@mui/material";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    console.log(coords, bounds);
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coords, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map coords={coords} setBounds={setBounds} setCoords={setCoords} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
