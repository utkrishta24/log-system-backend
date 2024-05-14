const express = require("express");
const router = express.Router();
const Log = require("../models/logModel");

router.post("/", async (req, res) => {
  try {
    const { level, log_string, metadata } = req.body;
    const newLog = new Log({
      level,
      log_string,
      timestamp: new Date(),
      metadata,
    });
    await newLog.save();
    res.status(201).json({ message: "Log created successfully" });
  } catch (error) {
    console.error("Error creating log:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
