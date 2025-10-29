import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden border-t border-gray-800">
      {/* ===== Subtle Glow Background ===== */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.05),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.03),transparent_70%)]"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* ===== Main Footer Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* ===== About Section ===== */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            QuakeViz
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm max-w-md">
            The <span className="text-amber-400 font-semibold">Earthquake Visualizer</span> is a real-time data platform that
            tracks and displays seismic activities worldwide. It helps
            researchers, analysts, and the public understand patterns,
            magnitudes, and locations of earthquakes for better disaster
            preparedness and awareness.
          </p>
        </div>

        {/* ===== Quick Links ===== */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          {["Home", "About", "Map", "Contact"].map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
            >
              {link}
            </a>
          ))}
        </div>

        {/* ===== Contact Info ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact Info</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              📍 <span className="text-gray-400">Hyderabad, India</span>
            </li>
            <li>
              📧{" "}
              <a
                href="mailto:support@earthquakeviz.com"
                className="hover:text-amber-400 transition-colors"
              >
                support@earthquakeviz.com
              </a>
            </li>
            <li>
              📞{" "}
              <a
                href="tel:+919876543210"
                className="hover:text-amber-400 transition-colors"
              >
                +91 98765 43210
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {["twitter", "github", "linkedin"].map((icon) => (
              <motion.a
                key={icon}
                href="#"
                whileHover={{ scale: 1.15 }}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:border-amber-400 transition"
              >
                <i
                  className={`fab fa-${icon} text-gray-400 hover:text-amber-400`}
                ></i>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Bottom Copyright Bar ===== */}
      <motion.div
        className="relative z-10 border-t border-gray-800 mt-14 pt-6 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        © {new Date().getFullYear()} Earthquake Visualizer — Developed by{" "}
        <span className="text-amber-400 font-semibold">Sai Manikanta</span>
      </motion.div>
    </footer>
  );
}
