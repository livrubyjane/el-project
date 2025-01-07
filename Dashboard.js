// frontend/src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [status, setStatus] = useState("clear");

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://YOUR_SERVER_IP:8443/api/laser/data")
        .then((response) => {
          setStatus(response.data.status);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 1000); // Refresh every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Laser Beam Status</h1>
      <p>Status: {status}</p>
    </div>
  );
};

export default Dashboard;
