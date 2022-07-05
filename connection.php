<?php

    
    $dbHost = "Localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName="formulario" ;

    $connection=mysqli_connect($dbHost , $dbUsername , $dbPassword , $dbName);
    
      

    if(!$connection){
        die("houve erro".mysqli_connect_error());
    }
   
?>