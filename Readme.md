🧭 Project Walkthrough – Earthquake Visualizer (QuakeViz)
👋 Introduction

Hi, I’m Sai Manikanta, and this project — Earthquake Visualizer — is my take-home challenge for Aganitha Cognitive Solutions.
The goal of this project is to build a real-time earthquake monitoring web application that visualizes global seismic activity using modern frontend and backend technologies.

This document explains how I approached, designed, and built the application step by step — from UI creation to backend integration and deployment.

🌐 Overview

Project Name: Earthquake Visualizer (QuakeViz)
Purpose: To visualize global earthquake activity in real-time using data from the USGS (United States Geological Survey) API.
Tech Stack:

Frontend: React (Vite) + Tailwind CSS + Framer Motion + React Leaflet

Backend: Node.js + Express + Axios + CORS

Data Source: USGS Earthquake GeoJSON Feed

Hosting: Vercel (for both frontend & backend)

⚙️ Development Approach
🧩 1. Initial Setup

I started by creating a React + Vite project for fast development and added Tailwind CSS (v3.4) for styling.

npm create vite@latest earthquake-visualizer --template react
cd earthquake-visualizer
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p


Configured Tailwind in index.css and verified styling.

Then, I installed key dependencies:

npm install framer-motion react-router-dom react-leaflet leaflet

🪐 2. UI/UX Design

I wanted the interface to be clean, futuristic, and space-themed, resembling a galaxy-style dashboard to reflect Earth’s dynamic energy.

Main design inspiration:

Dark background with golden and cyan gradients

Animated elements (planets, stars, motion transitions)

Smooth hover effects

Key components:

Navbar.jsx → modern glass-style navbar with Framer Motion animations

Home.jsx → hero section, animated headings, and live earthquake stats

FilterBar.jsx → dropdown to filter earthquake data (All / >5 / 3–5 / <3)

Map.jsx → interactive world map using React Leaflet

Footer.jsx → dark theme with about text & subtle motion effects

🌍 3. Map Integration

For the core visualization, I used React Leaflet:

<MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  {earthquakes.map((quake) => (
    <CircleMarker ...>
      <Popup>Details</Popup>
    </CircleMarker>
  ))}
</MapContainer>


Each earthquake is represented by a CircleMarker with:

Color → based on magnitude (green/yellow/red)

Size → proportional to magnitude

Popup → showing location, depth, and time

🔥 4. Backend Creation

I built a lightweight Node.js + Express backend:

npm init -y
npm install express axios cors dotenv nodemon


Created server.js:

import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/earthquakes", async (req, res) => {
  const { data } = await axios.get(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
  );
  res.json(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));


✅ This ensures the frontend can fetch data via my backend (avoiding CORS issues).

🧠 5. Connecting Frontend & Backend

In Map.jsx, I replaced the direct USGS API call with my backend endpoint:

const response = await fetch("https://quakeviz-backend.vercel.app/api/earthquakes");


Then I filtered data dynamically based on the dropdown selection:

const filteredEarthquakes = earthquakes.filter((quake) => {
  const mag = quake.properties.mag;
  if (filter === "Magnitude > 5") return mag > 5;
  if (filter === "Magnitude 3–5") return mag >= 3 && mag <= 5;
  if (filter === "Magnitude < 3") return mag < 3;
  return true;
});

✨ 6. Enhancing User Experience

I integrated:

Framer Motion for smooth transitions and entry animations

Space Background Animations (planets, stars, nebula) using CSS + motion

Lottie Animation of a rotating globe for visual appeal

Responsive Design across devices

⚡ 7. Deployment

Both frontend and backend are deployed on Vercel:

🔹 Backend:

Root folder: /backend

Build Command: npm install

Start Command: node server.js

🔹 Frontend:

Root folder: /earthquake-visualizer

Build Command: npm run build

Output Directory: dist

Frontend fetches data from the live backend API on Vercel.

📊 Final Features Overview

✅ Real-time earthquake visualization
✅ Magnitude-based color filtering
✅ Interactive global map
✅ Responsive and animated UI
✅ API integration via backend proxy
✅ Deployed full-stack web app

🧩 Learnings

During this project, I deepened my understanding of:

React performance optimization using hooks

Integrating 3rd-party APIs and handling CORS

Using React Leaflet effectively for geospatial data

Backend proxying and deployment pipelines

Creating professional UIs with Framer Motion + TailwindCSS

🚀 Conclusion

The Earthquake Visualizer (QuakeViz) is a demonstration of my full-stack skills, combining creative UI design with real-world data visualization and backend integration.

🌍 Built with passion, motion, and precision — by Sai Manikanta.