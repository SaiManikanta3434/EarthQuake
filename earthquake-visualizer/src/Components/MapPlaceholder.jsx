import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function MapPlaceholder() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden bg-gradient-to-b from-black via-[#0b0b0f] to-[#1a1209] text-center">
      {/* 🌌 Subtle stars background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 30%, white 60%, transparent 100%),
                            radial-gradient(2px 2px at 70% 80%, white 40%, transparent 100%),
                            radial-gradient(1.5px 1.5px at 40% 60%, white 50%, transparent 100%)`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
          opacity: 0.12,
        }}
      />

      {/* 🌍 Rotating Globe Animation */}
      <motion.div
        className="relative z-10 flex justify-center items-center "
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        animate={{ y: [0, -20, 0] }}
        viewport={{ once: true }}
      >
        <DotLottieReact
          src="https://lottie.host/f2185685-504c-49c8-ab08-eef9a52dc5d5/g28CjKNr8Y.lottie"
          loop
          autoplay
          style={{ width: 600, height: 600 }}
        />
      </motion.div>

      {/* ✨ Text Content */}
      <motion.h2
        className="relative z-10 text-4xl sm:text-5xl font-bold text-amber-400 mt-10 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Earth in Motion: Visualizing Global Seismic Activity
      </motion.h2>

      <motion.p
        className="relative z-10 text-gray-400 mt-4 max-w-2xl text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Explore how tectonic movements shape our world. This live globe shows the dynamic planet 
        we inhabit, powered by real-time earthquake data.
      </motion.p>

      {/* 🌠 Golden shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-amber-100/5 pointer-events-none" />
    </section>
  );
}
