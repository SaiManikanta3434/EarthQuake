import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

export default function Map() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchEarthquakes = async () => {
      try {
        // 🔗 Fetching from your Express backend instead of USGS directly
        const response = await fetch("http://localhost:5000/api/earthquakes");
        const data = await response.json();
        setEarthquakes(data.features || []);
      } catch (error) {
        console.error("Error fetching earthquake data:", error);
      }
    };
    fetchEarthquakes();
  }, []);

  const filteredEarthquakes = earthquakes.filter((quake) => {
    const magnitude = quake.properties.mag;
    if (filter === "All") return true;
    if (filter === "Magnitude > 5") return magnitude > 5;
    if (filter === "Magnitude 3–5") return magnitude >= 3 && magnitude <= 5;
    if (filter === "Magnitude < 3") return magnitude < 3;
    return true;
  });

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-gray-100">
      {/* ===== Static Gradient Background ===== */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#3b2f1d]"
        style={{
          backgroundSize: "200% 200%",
          filter: "brightness(1.1)",
        }}
      />

      {/* ===== Static Stars ===== */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 30%, white 60%, transparent 100%),
            radial-gradient(2px 2px at 70% 80%, white 40%, transparent 100%),
            radial-gradient(1.5px 1.5px at 40% 60%, white 50%, transparent 100%)`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
          opacity: 0.15,
        }}
      />

      {/* ===== Title ===== */}
      <header className="relative z-20 text-center mb-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
          Earthquake Activity Map
        </h1>
        <p className="text-gray-300 mt-2 text-lg">
          Real-time seismic data powered by our custom API 🌍
        </p>
      </header>

      {/* ===== Filter Bar ===== */}
      <div className="relative z-20 flex justify-center mt-4 mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-5 py-2 rounded-lg border border-amber-400/40 bg-black/40 backdrop-blur-md text-amber-200 font-medium shadow-md hover:shadow-amber-400/20 transition duration-300 focus:ring-2 focus:ring-amber-400/50 outline-none"
        >
          <option value="All">All Magnitudes</option>
          <option value="Magnitude > 5">Magnitude &gt; 5</option>
          <option value="Magnitude 3–5">Magnitude 3–5</option>
          <option value="Magnitude < 3">Magnitude &lt; 3</option>
        </select>
      </div>

      {/* ===== Map Container ===== */}
      <div className="relative z-20 flex justify-center items-center w-[90%] max-w-6xl rounded-2xl border border-amber-300/30 shadow-[0_0_30px_rgba(255,215,0,0.2)] overflow-hidden">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          scrollWheelZoom={true}
          className="h-[80vh] w-full rounded-xl"
          style={{
            background: "radial-gradient(circle at center, #000000, #1a1209)",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />

          {filteredEarthquakes.map((quake, i) => {
            const [lng, lat, depth] = quake.geometry.coordinates;
            const mag = quake.properties.mag;
            const color =
              mag >= 6
                ? "#f87171"
                : mag >= 4
                ? "#fbbf24"
                : "#34d399";

            return (
              <CircleMarker
                key={i}
                center={[lat, lng]}
                radius={Math.max(mag * 2, 4)}
                fillColor={color}
                color={color}
                weight={1}
                fillOpacity={0.8}
              >
                <Popup>
                  <div className="text-sm">
                    <strong>Location:</strong> {quake.properties.place || "N/A"}
                    <br />
                    <strong>Magnitude:</strong> {mag?.toFixed(1)}
                    <br />
                    <strong>Depth:</strong> {depth?.toFixed(1)} km
                    <br />
                    <strong>Time:</strong>{" "}
                    {new Date(quake.properties.time).toLocaleString()}
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>

      {/* ===== Legend ===== */}
      <div className="relative z-20 flex justify-center mt-8">
        <div className="flex items-center gap-6 px-8 py-4 bg-black/40 border border-amber-300/20 rounded-full backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-2 text-sm">
            <span className="w-4 h-4 rounded-full bg-green-400"></span> Minor (&lt; 4)
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-4 h-4 rounded-full bg-yellow-400"></span> Moderate (4–6)
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-4 h-4 rounded-full bg-red-500"></span> Severe (&gt; 6)
          </div>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <footer className="relative z-20 text-center mt-8 mb-6 text-sm text-gray-400">
        Data Source: Backend API | Updated every few minutes | Made by{" "}
        <span className="text-amber-400 font-semibold">Sai Manikanta</span>
      </footer>
    </div>
  );
}
