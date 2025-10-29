import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-gray-100 bg-gradient-to-br from-black via-[#1a1a1a] to-[#3b2f1d]">
      {/* ===== Stars Background ===== */}
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

      {/* ===== Page Header ===== */}
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold mb-10 bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500 bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      {/* ===== Contact Form ===== */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 w-[90%] max-w-3xl bg-black/40 backdrop-blur-md rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.15)] border border-amber-400/20 p-10 space-y-6"
      >
        <div>
          <label className="block text-amber-300 mb-2 text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 bg-black/60 border border-amber-400/20 rounded-lg focus:ring-2 focus:ring-amber-400/50 text-gray-100 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-amber-300 mb-2 text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@mail.com"
            className="w-full px-4 py-3 bg-black/60 border border-amber-400/20 rounded-lg focus:ring-2 focus:ring-amber-400/50 text-gray-100 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-amber-300 mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="w-full px-4 py-3 bg-black/60 border border-amber-400/20 rounded-lg focus:ring-2 focus:ring-amber-400/50 text-gray-100 outline-none transition resize-none"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(255,215,0,0.3)",
          }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-amber-400 text-black font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-300 transition"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* ===== Contact Info ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-12 text-center text-gray-400 text-sm"
      >
        <p>📍 Hyderabad, India</p>
        <p>📧 support@earthquakeviz.com</p>
        <p>📞 +91 7036143077</p>
      </motion.div>

      {/* ===== Footer ===== */}
      <footer className="relative z-20 text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Earthquake Visualizer | Built by{" "}
        <span className="text-amber-400 font-semibold">Sai Manikanta</span>
      </footer>
    </div>
  );
}
