const express = require("express");
const os = require("os");
const app = express();
const port = process.env.PORT || 3000;

// serve static files from /public
app.use(express.static("public"));

// API endpoint
app.get("/api", (req, res) => {
  res.json({
    message: "🚀 Node.js App Deployed Successfully on AWS EC2!",
    server: os.hostname(),
    time: new Date().toISOString(),
  });
});

// start server
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
