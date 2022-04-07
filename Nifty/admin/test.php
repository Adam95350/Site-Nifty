<?php require_once "model.php";
$m = MODEL::getClass();
?>

<?php $x = $m->getByKey("apropos");

var_dump($x);
?>

