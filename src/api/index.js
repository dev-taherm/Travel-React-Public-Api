import axios from "axios";
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.request(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "4cfa0b5319msh4fb8f6d77041999p1f6c05jsnf6d80f3e1a0e",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
