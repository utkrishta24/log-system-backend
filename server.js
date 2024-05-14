// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logRoutes = require("./routes/logRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://krishsinha2406:jmkU1wfBQcMY9Z8t@cluster0.rv12yc1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });

app.use(express.json());

app.use("/api/logs", logRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
