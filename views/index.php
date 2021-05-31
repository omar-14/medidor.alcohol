<?php
    $Valor = $_GET["medicion"];
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Medidor de cantidad de alcohol</title>
<meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'/>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="./main.css" rel="stylesheet">
</head>
<body>
    <main>
        <h1>Medidor de cantidad de alcohol</h1> 
        
        <h1><?php echo $Valor;?></h1>

        <img src="./vaso/<?php echo $Valor;?>.png" width="450" height="500">
        <br>
        <label style="font-size: 300%;" >Nivel de alcohol</label>
    </main>
</body>
</html>