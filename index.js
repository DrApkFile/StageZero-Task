const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Endpoint
app.get("/", (req, res) => {
  res.json({
    email: "aghaken25@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/DrApkFile/StageZero-Task",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
