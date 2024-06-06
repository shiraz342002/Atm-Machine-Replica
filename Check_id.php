<?php
$acc_no=$_GET["acc_no"];
$conn= new mysqli('localhost','root','','bank');
$q="SELECT name FROM atm WHERE acc_no='$acc_no'";
if($conn->connect_errno){
    echo("Connection error");
}
else{
    $records=$conn->query($q);
    if($records->num_rows>0){
        $row=$records->fetch_assoc();
        $name=$row["name"];
        echo "Welcome $name<br>";
        echo "Enter Your Pin";
    }
    else{

        echo "1";
    }
}

?>