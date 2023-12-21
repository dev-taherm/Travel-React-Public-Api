import { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./style.css";

const List = ({ places }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  return (
    <div className="container">
      <Typography variant="h4">Food & Dining around you</Typography>

      <FormControl className="formControl">
        <InputLabel id="type">Type</InputLabel>
        <Select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="formControl">
        <InputLabel id="rating">Rating</InputLabel>
        <Select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className="list">
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
