// backend/models/logModel.js
const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  level: {
    type: String,
    enum: ["info", "error", "success"],
    required: true,
  },
  log_string: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  metadata: {
    source: String,
  },
});

module.exports = mongoose.model("Log", logSchema);
