<?php

$servername = "localhost";
$username = "admin";
$password = "admin";
$dbname = "react_php_crud";


// Create connection
$db_conn = mysqli_connect("localhost","admin","admin");

// Check connection
if ($db_conn->connect_error) {
    die("Connection failed: " . $db_conn->connect_error);
}

$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($db_conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $db_conn->error;
}
$db_conn = mysqli_connect("localhost","admin","admin",$dbname);

$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    user_email VARCHAR(50) NOT NULL
)";

if ($db_conn->query($sql) === FALSE) {
    echo "Error creating table: " . $db_conn->error;
}



