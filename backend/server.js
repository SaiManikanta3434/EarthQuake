import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import earthquakeRoutes from "./src/routes/earthquakes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("🌍 Earthquake Visualizer Backend Running...");
});

// Earthquake routes
app.use("/api/earthquakes", earthquakeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
