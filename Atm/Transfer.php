<?php

$sender_accno = $_GET["sender_accno"];
$rec_accno = $_GET["rec_accno"];
$amount = $_GET["amount"];
$conn = new mysqli('localhost', 'root', '', 'bank');
$q = "SELECT * FROM atm WHERE acc_no='$sender_accno'";
$q2 = "SELECT * FROM atm WHERE acc_no='$rec_accno'";

if ($conn->connect_errno) {
    echo ("Connection error");
} else {
    $records = $conn->query($q);
    $records_2 = $conn->query($q2);
    if ($records->num_rows > 0 && $records_2->num_rows > 0) {
        $row = $records->fetch_assoc();
        $row_2 = $records_2->fetch_assoc();
        $balance = $row["balance"];
        $balance_2 = $row_2["balance"];

        $new_sender_balance = $balance - $amount;
        $new_rec_balance = $balance_2 + $amount;

        $q3 = "UPDATE atm SET balance='$new_sender_balance' WHERE acc_no='$sender_accno'";
        $q4 = "UPDATE atm SET balance='$new_rec_balance' WHERE acc_no='$rec_accno'";
        
        $conn->query($q3);
        $conn->query($q4);

        echo "Funds Transferred to $rec_accno Successfully<br>";
    } else {
        echo "Service not Available";
    }

    $conn->close();
}
?>
