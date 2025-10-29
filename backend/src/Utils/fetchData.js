import axios from "axios";

const USGS_URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

export async function fetchEarthquakeData() {
  const response = await axios.get(USGS_URL);
  return response.data;
}
