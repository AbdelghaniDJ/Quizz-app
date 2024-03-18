<?php
session_start();
if(isset($_POST['submit'])){
    session_destroy();
    header("Location:index.php");
    
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/kisspng-display-device-computer-monitors-font-librery-5b38b6ee190c80.2496208815304435021026.png">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    
</head>
<body>

<div class="card">
  <div class="card-header">
    Welcome <?php echo $_SESSION['nom'] ."  ". $_SESSION['prenom'] ;?>
  </div>
  <div class="card-body">
  <div class="quiz-container">
        <div id="quiz" class="quiz"></div>
        
        
        <button  id="submit" class="submit-button btn btn-primary">Submit Answers</button>
        <br>

        <form action="#" method="post">
        <button name="submit" type="submit" class="btn btn-primary">Logout</button>
        </form>
        <div id="result" class="result"></div>
    </div>
  </div>
</div>

    
    <script src="script.js"></script>
</body>
</html>
