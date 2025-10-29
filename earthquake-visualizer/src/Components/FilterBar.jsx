import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FilterBar({ onFilterSelect }) {
  const filters = [
    "All",
    "Magnitude > 5",
    "Magnitude 3–5",
    "Shallow (<70km)",
    "Deep (>300km)",
    "Recent (24h)",
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const handleSelect = (filter) => {
    setActiveFilter(filter);
    onFilterSelect?.(filter);
  };

  return (
    <motion.div
      className="w-full flex flex-wrap justify-center items-center gap-4 py-8 px-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {filters.map((filter, index) => (
        <motion.button
          key={filter}
          onClick={() => handleSelect(filter)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250, damping: 12 }}
          className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === filter
              ? "bg-black text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {filter}

          {/* Animated underline for active state */}
          {activeFilter === filter && (
            <motion.div
              layoutId="activeUnderline"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
}
