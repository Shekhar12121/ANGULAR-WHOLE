<?php
$un=$_SERVER['QUERY_STRING'];
$con=mysqli_connect("localhost","root","");
mysqli_select_db($con,"test");
$data=mysqli_query($con,"select * from user_det where uname='$un'");
echo mysqli_num_rows($data);
?>