// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const laserRoutes = require("./routes/laserRoutes");

const app = express();
const PORT = 8443;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/laser", laserRoutes);

app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
