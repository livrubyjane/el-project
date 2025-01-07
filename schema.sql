-- database/schema.sql
CREATE DATABASE laser_system;

USE laser_system;

CREATE TABLE laser_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
