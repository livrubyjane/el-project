// backend/models/laserDataModel.js
const mysql = require("mysql2");

// Set up a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "laser_system",
});

const saveLaserData = (data, callback) => {
  const query = "INSERT INTO laser_data (status, timestamp) VALUES (?, ?)";
  connection.query(query, [data.status, new Date()], callback);
};

module.exports = { saveLaserData };
