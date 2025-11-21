import express from "express";
import multer from "multer";
import Report from "../models/Report.js";

const router = express.Router();

// configure multer
const storage = multer.memoryStorage(); // stores uploaded file in memory as a buffer
const upload = multer({ storage });

// POST /api/reports - submit a new report (with optional file)
router.post("/", upload.single("evidence"), async (req, res) => {
  try {
    const { type, description, location } = req.body;
    const evidence = req.file ? req.file.buffer : null; // multer stores file in req.file

    const report = new Report({
      type,
      description,
      location,
      evidence, // store file as buffer in DB
    });

    await report.save();
    res.status(201).json({ message: "Report submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error submitting report", error: err.message });
  }
});

// GET /api/reports - list all reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: "Error fetching reports", error: err.message });
  }
});

export default router;
