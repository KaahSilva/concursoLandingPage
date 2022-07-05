<?php
    include_once("connection.php");

    if(isset($_POST['firstname']) && isset($_POST['surname']) && isset($_POST['email'])){

        $firstname=$_POST['firstname'];
        $surname=$_POST['surname'];
        $email=$_POST['email'];
 
    

        $sql="INSERT INTO leadcapture(nome , sobrenome, email) VALUES('$firstname', '$surname','$email' ) ";
       
        mysqli_query($connection, $sql);
        mysqli_close($connection);

       


      
    }
    


?>


<html lang="pt BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="scr\css\thanks.css">
    <title>Obrigada pela participação</title>
</head>
<body>
    <main class="container">
        <h1>Obrigada <?php echo $firstname=$_POST['firstname'];?> <?php echo $surname=$_POST['surname'];?> , por deixar seu contato. <br> Em breve mandaremos novidades e atualizações sobre o concurso!!</h1>

        <div class="img-conecta-thanks">
        <img src="scr\imagens\avatar-conecta02.png" alt="">
        </div>
        <hr>
    </main>
</body>  
