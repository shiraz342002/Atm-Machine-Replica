<?php
$acc_no = $_GET["acc_no"];
$amount = $_GET["amount"];
$conn = new mysqli('localhost', 'root', '', 'bank');
$q = "SELECT * FROM atm WHERE acc_no='$acc_no'";
if ($conn->connect_errno) {
    echo ("Connection error");
} else {
    $records = $conn->query($q);
    if ($records->num_rows > 0) {
        $row = $records->fetch_assoc();
        $balance = $row["balance"];
        $rem_amount = $balance - $amount;
        if ($rem_amount < 0) {
            echo "Insufficient Balance";
        } else {
            $q2 = "UPDATE atm SET balance='$rem_amount' WHERE acc_no='$acc_no'";
            $conn->query($q2);
            echo "Collect Your Cash & Receipt<br>";
            echo "Your Remaining Balance is $rem_amount Rs.";
        }
    } else {
        echo "Service not Available";
    }

    $conn->close();
}
?>
