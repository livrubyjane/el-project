// backend/controllers/laserController.js
const laserDataModel = require("../models/laserDataModel");

const saveLaserData = (req, res) => {
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ error: "Status is required" });
  }

  laserDataModel.saveLaserData({ status }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to save data" });
    }
    res.status(200).json({ message: "Data saved successfully" });
  });
};

module.exports = { saveLaserData };
