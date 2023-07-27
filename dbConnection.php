<?php

$host = "localhost";
$user = "root";
$passward="";
$database = "crud";

$con = new mysqli($host, $user, $passward, $database);

if($con->connect_error){

    die("failed connection");
}


?>


