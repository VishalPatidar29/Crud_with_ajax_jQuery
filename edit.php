<?php
include('dbConnection.php');

$data = stripcslashes(file_get_contents("php://input"));
$mydata = json_decode($data,true);

$id = $mydata['sid'];

$sql = "SELECT * FROM ajax WHERE id={$id} ";
$result = $con->query($sql);

$row = $result->fetch_assoc();
echo json_encode($row);


?>