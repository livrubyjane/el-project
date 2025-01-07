// backend/routes/laserRoutes.js
const express = require("express");
const router = express.Router();
const laserController = require("../controllers/laserController");

router.post("/data", laserController.saveLaserData);

module.exports = router;
