const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// API Endpoint
app.get("/", (req, res) => {
  const response = {
    email: "aghaken25@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/DrApkFile/StageZero-Task",
  };

  // Log a message indicating a successful request
  console.log(`200 OK - GET request successful at ${new Date().toISOString()}`);

  res.json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
