<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE taskdb";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

// Create tasks table
$conn->select_db("taskdb");
$sql = "CREATE TABLE tasks (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    status VARCHAR(30) NOT NULL
)";
if ($conn->query($sql) === TRUE) {
    echo "Table tasks created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
