<?php
include('dbConnection.php');

$data = stripcslashes(file_get_contents("php://input"));
$mydata = json_decode($data,true);

$id = $mydata['sid'];

if(!empty($id)){

    $sql = "DELETE FROM ajax WHERE id ='$id'";

    if($con->query($sql) == TRUE){
        echo "Student Deleted Successfully!!";

    }else{
        echo "unable to Delete Student";
    }


}



?>