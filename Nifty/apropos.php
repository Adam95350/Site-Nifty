<?php require_once "model.php";
     $m = MODEL::getClass();
     $text = $m->getByKey("apropos");
    
?>

<h1><?=$text['Title']?></h1>
<h2><?=$text['SubTitle']?></h2>
<p><?= $text['Body']?></p>