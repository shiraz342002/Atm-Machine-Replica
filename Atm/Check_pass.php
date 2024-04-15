<?php
$pass = $_GET["pass"];
$acc_no = $_GET["acc_no"];
$conn = new mysqli('localhost', 'root', '', 'bank');

if ($conn->connect_errno) {
    echo "Connection error";
} else {
    $q = "SELECT * FROM atm WHERE pin='$pass' AND acc_no='$acc_no'";
    $records = $conn->query($q);

    if ($records === false) {
        echo "Query error";
    } else {
        if ($records->num_rows > 0) {
            echo "Choose Our Services";
        } else {
            echo "1"; 
        }
    }
    $conn->close();
}
?>
