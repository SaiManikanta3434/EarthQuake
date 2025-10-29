import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/About.png"; // 🖼️ Add your image in src/assets folder

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-gray-100 bg-gradient-to-br from-black via-[#1a1a1a] to-[#3b2f1d]">
      {/* ===== Background Stars ===== */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 30%, white 60%, transparent 100%),
            radial-gradient(2px 2px at 70% 80%, white 40%, transparent 100%),
            radial-gradient(1.5px 1.5px at 40% 60%, white 50%, transparent 100%)`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
          opacity: 0.1,
        }}
      />

      {/* ===== Main Content ===== */}
      <section className="relative z-20 max-w-6xl w-[90%] grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
        {/* ===== Image Side ===== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={AboutImg}
            alt="Earthquake Data Visualization"
            className="rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.2)] border border-amber-400/20 w-full max-w-md object-cover"
          />
        </motion.div>

        {/* ===== Text Side ===== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            About Earthquake Visualizer
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            The <span className="text-amber-400 font-semibold">Earthquake Visualizer</span> is a powerful web application designed to help users
            monitor global seismic activities in real time. It leverages the{" "}
            <span className="text-amber-300 font-medium">USGS Earthquake API</span> to fetch accurate earthquake data, displaying the location,
            magnitude, and depth of each event on an interactive world map.
          </p>

          <p className="text-gray-400 leading-relaxed text-md">
            Built with modern web technologies like{" "}
            <span className="text-amber-300 font-medium">React</span>,{" "}
            <span className="text-amber-300 font-medium">Leaflet.js</span>, and{" "}
            <span className="text-amber-300 font-medium">Framer Motion</span>,
            this app combines data visualization, design, and real-time analytics.
            The aim is to raise awareness and support for better disaster preparedness
            through intuitive, engaging visuals.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,215,0,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 bg-amber-400 text-black font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-300 transition"
            onClick={() => window.open("https://earthquake.usgs.gov/", "_blank")}
          >
            Learn More from USGS
          </motion.button>
        </motion.div>
      </section>

      
      
    </div>
  );
}
