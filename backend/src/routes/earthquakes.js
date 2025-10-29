import express from "express";
import { getAllEarthquakes, getFilteredEarthquakes } from "../controllers/earthquakeController.js";

const router = express.Router();

router.get("/", getAllEarthquakes);
router.get("/filter", getFilteredEarthquakes);

export default router;
