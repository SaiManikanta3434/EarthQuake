import { fetchEarthquakeData } from "../Utils/fetchData.js";

export const getAllEarthquakes = async (req, res) => {
  try {
    const data = await fetchEarthquakeData();
    res.json(data);
  } catch (error) {
    console.error("Error fetching earthquakes:", error);
    res.status(500).json({ message: "Failed to fetch earthquake data" });
  }
};

export const getFilteredEarthquakes = async (req, res) => {
  try {
    const { minMag = 0, maxMag = 10 } = req.query;
    const data = await fetchEarthquakeData();
    const filtered = data.features.filter(
      (eq) => eq.properties.mag >= minMag && eq.properties.mag <= maxMag
    );
    res.json(filtered);
  } catch (error) {
    console.error("Error filtering earthquakes:", error);
    res.status(500).json({ message: "Error filtering earthquake data" });
  }
};
