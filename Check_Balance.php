<?php
$acc_no=$_GET["acc_no"];
$conn= new mysqli('localhost','root','','bank');
$q="SELECT balance FROM atm WHERE acc_no='$acc_no'";
if($conn->connect_errno){
    echo("Connection error");
}
else{
    $records=$conn->query($q);
    if($records->num_rows>0){
        $row=$records->fetch_assoc();
        $balance=$row["balance"];
        if($balance<=0){
            echo "Insufficient Balnce Please Credit";
        }
        else{

            echo "Your Current Balnce is $balance Rs.<br>";
        }
    }
    else{
            echo "Insufficient Balnce Please Credit";       
    }

    
}

?>