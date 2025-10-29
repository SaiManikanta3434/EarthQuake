import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Map", "About", "Contact"];

  return (
    <motion.nav
      className="relative sticky top-0 z-50 overflow-hidden"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
    >
      {/* 🌌 Animated Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0%,rgba(0,0,0,1)_70%)] animate-space-glow"></div>

      {/* Twinkling stars (faint white dots moving slowly) */}
      <div className="absolute inset-0 opacity-40 animate-stars"></div>

      {/* Navbar Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center backdrop-blur-sm">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="text-cyan-400 text-2xl font-extrabold tracking-wide hover:text-cyan-300 transition flex"
          >
            <img src={Logo} alt="" className="w-8 h-auto rounded-full mr-2"  /> QuakeViz
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`
                }
              >
                {item}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          ) : (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: 180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.4 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </motion.svg>
          )}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative md:hidden bg-gray-900 border-t border-gray-800 flex flex-col items-center py-4 space-y-4"
          >
            {navLinks.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
