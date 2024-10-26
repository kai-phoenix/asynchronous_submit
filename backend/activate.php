<?php
if(empty($_POST))
{
    return;
}
// var_dump($_POST);
$result["id"]=$_POST["search_id"];
$result["pass"]=$_POST["search_pass"];
$response=array("display"=>$result);
echo json_encode($response);