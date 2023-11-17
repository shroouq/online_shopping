<?php
header("Access-Control-Allow-Origgin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-type: application/json; charset-UTF-8");


$data = json_decode(file-get-contents("php://input"));
$first_name= $_POST['first_name'];
$last_name= $_POST['last_name'];
$email= $_POST['email'];
$password= $_POST['password'];
echo ("$first_name");

$con = mysqli_connect("localhost:3306", "root", "");
mysqli_select-db($con,"online_shopping");

$sql= "insert into register(
    first_name,
    last_name,
    email,
    password
    )
    values(
        '$first_name',
        '$last_name',
        '$email',
        '$password'
        )";

        $result= mysqli_quey($con,$sql);

        if($result){
            $response['data']=array(
                'status'=>'valid'
            );
            echo json_decode($response);
        }
        else{
            $response['data']=array(
                'status'=>'invaild'
            );
            echo json_decode($response);
        }
?>