<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "taskdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to insert a new task into the database
function insertTask($name, $status) {
    global $conn;
    $stmt = $conn->prepare("INSERT INTO tasks (name, status) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $status);
    $stmt->execute();
    $stmt->close();
}

// Function to fetch tasks from the database
function fetchTasks() {
    global $conn;
    $sql = "SELECT id, name, status FROM tasks";
    $result = $conn->query($sql);
    return $result->fetch_all(MYSQLI_ASSOC);
}

// Insert a sample task
insertTask("New Task", "pending");

// Fetch and display tasks
$tasks = fetchTasks();
echo "<h1>Task List</h1>";
echo "<table border='1'>";
echo "<tr><th>ID</th><th>Name</th><th>Status</th></tr>";
foreach ($tasks as $task) {
    echo "<tr><td>{$task['id']}</td><td>{$task['name']}</td><td>{$task['status']}</td></tr>";
}
echo "</table>";

$conn->close();
?>
