import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FilterBar from "../Components/FilterBar";
import MapPlaceholder from "../Components/MapPlaceholder";

export default function Home() {
  const navigate = useNavigate();
  const [earthquakes, setEarthquakes] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data from backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/earthquakes");
        const data = await res.json();
        setEarthquakes(data.features || []);
        setFilteredData(data.features || []);
      } catch (error) {
        console.error("Error fetching earthquake data:", error);
      }
    };
    fetchData();
  }, []);

  // Filter logic based on selected filter
  useEffect(() => {
    let filtered = earthquakes;

    if (selectedFilter === "Magnitude > 5") {
      filtered = earthquakes.filter((q) => q.properties.mag > 5);
    } else if (selectedFilter === "Magnitude 3–5") {
      filtered = earthquakes.filter(
        (q) => q.properties.mag >= 3 && q.properties.mag <= 5
      );
    } else if (selectedFilter === "Shallow (<70km)") {
      filtered = earthquakes.filter((q) => q.geometry.coordinates[2] < 70);
    } else if (selectedFilter === "Deep (>300km)") {
      filtered = earthquakes.filter((q) => q.geometry.coordinates[2] > 300);
    }

    setFilteredData(filtered);
  }, [selectedFilter, earthquakes]);

  // Calculate stats dynamically
  const totalQuakes = filteredData.length;
  const strongQuakes = filteredData.filter(
    (q) => q.properties.mag >= 5
  ).length;
  const avgDepth =
    filteredData.length > 0
      ? (
          filteredData.reduce(
            (sum, q) => sum + q.geometry.coordinates[2],
            0
          ) / filteredData.length
        ).toFixed(1)
      : 0;

  return (
    <div className="bg-[#0b0b0f] text-gray-100 min-h-screen font-sans overflow-hidden">
      {/* ===== Hero Section ===== */}
      <section className="w-full flex flex-col items-center text-center py-24 px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center text-sm bg-gray-900/60 text-amber-400 rounded-full px-3 py-1 mb-6 border border-amber-400/20">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
            Real-time Monitoring Active
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,200,100,0.3)]">
            Global Earthquake Analytics
          </h1>
          <h2 className="text-5xl sm:text-6xl font-bold leading-tight text-gray-400 mb-6">
            for Research & Safety Teams
          </h2>

          <p className="text-gray-300 max-w-2xl text-lg mb-8">
            Track, analyze, and visualize seismic activity across the world.
            Get live updates, magnitude trends, and alert insights directly
            from official USGS data.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/map")}
              className="px-6 py-3 bg-amber-500 text-black rounded-md font-semibold hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
            >
              View Live Map
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md font-medium text-gray-200 border border-gray-700 transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* ===== Filter Bar Section ===== */}
      <section className="flex justify-center mt-6 relative z-10">
        <div className="w-[90%] max-w-4xl">
          <FilterBar onFilterSelect={(filter) => setSelectedFilter(filter)} />
        </div>
      </section>

      {/* ===== Dashboard Section ===== */}
      <section className="flex justify-center py-20 relative z-10">
        <motion.div
          className="bg-[#111] border border-amber-500/20 rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.2)] w-[90%] max-w-6xl p-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="border-b border-amber-500/20 pb-4 mb-6 flex justify-between items-center">
            <h3 className="font-semibold text-amber-300 text-lg">
              Earthquake Activity Dashboard
            </h3>
            <div className="text-sm text-amber-400">
              Filter: <b>{selectedFilter}</b>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-lg border border-gray-700 bg-black/50 hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-400 mb-1">
                Global Earthquakes (24h)
              </p>
              <h4 className="text-3xl font-bold text-amber-400">{totalQuakes}</h4>
            </div>
            <div className="p-4 rounded-lg border border-gray-700 bg-black/50 hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-400 mb-1">
                Strong Magnitude (5+)
              </p>
              <h4 className="text-3xl font-bold text-amber-400">{strongQuakes}</h4>
            </div>
            <div className="p-4 rounded-lg border border-gray-700 bg-black/50 hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-400 mb-1">Average Depth (km)</p>
              <h4 className="text-3xl font-bold text-amber-400">{avgDepth}</h4>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="w-full text-center py-24 bg-[#0e0e0e] border-t border-amber-400/10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-amber-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stay Ahead with Real-Time Insights
        </motion.h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Detect global quakes instantly and visualize intensity, location, and
          patterns that matter most.
        </p>
        <motion.button
          onClick={() => navigate("/map")}
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-amber-500 text-black rounded-md font-medium hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/30"
        >
          Get Started
        </motion.button>
      </section>
      <MapPlaceholder/>
    </div>
  );
}
