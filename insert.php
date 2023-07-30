<?php
include('dbConnection.php');
$id = $_POST['sid'];
$name = $_POST['name']; 
$email = $_POST['email']; 
$number = $_POST['number']; 
$address = $_POST['address']; 
$filename=$_FILES["image"]["name"];
$tempfile =$_FILES["image"]["tmp_name"];
$folder = "image/".$filename;




if(!empty($name) && !empty($email) && !empty($number) && !empty($address)){

  
        $sql = "INSERT INTO ajax(id,studentname, email, number, address, image) VALUES ('$id','$name','$email','$number','$address', '$filename') ON DUPLICATE KEY UPDATE studentname ='$name', email = '$email', number ='$number', address = '$address', image ='$filename' ";
         
        if($con->query($sql) == TRUE){
      move_uploaded_file($tempfile,$folder);
        echo 1;
        
        }
        else{
            echo 0;
        }
    
    }
    
    else{
        echo 0;
    }
    













// if(!empty($name) && !empty($email) && !empty($number) && !empty($address)){

  
//     $sql = "INSERT INTO ajax(studentname, email, number, address, image) VALUES ('$name','$email','$number','$address', '$filename')";
     
//     if($con->query($sql) == TRUE){
//   move_uploaded_file($tempfile,$folder);
//     echo "Student Save Successfully";
    
//     }
//     else{
//         echo "unable to save fields";
//     }

// }else{
//     echo "Fill all fields";
// }


?>