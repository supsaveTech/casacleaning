
<?php

// echo "<pre>";
// print_r($_SERVER);
// echo "</pre>";

//echo "<pre>";
//echo $_SERVER['PHP_SELF'];

//echo "</pre>";

function base(){
	//to get only the full path without index.php side
	//here will give u something like /url/ instead of url/index.php
return str_replace('index.php',"",$_SERVER['PHP_SELF']);
}

$url = explode("/",$_SERVER['QUERY_STRING']);


 //echo "<pre>";
 //print_r($url);
//echo "</pre>";


//to check if the page entered in url exits
if (file_exists($url[0]. '.php')){
	 require_once($url[0]. '.php');
}else{
	header("location:home");
}

?>
<html>
 
</html> 
