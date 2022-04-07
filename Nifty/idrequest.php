<?php require_once "modelCarousel.php";
    $m = MODELCAROUSEL::getClass();
    if(isset($_GET["id"])){
        $responce = $m->getByid($_GET["id"]);
        $responce = $responce[0];
        // var_dump($responce);
        $img = $responce['image'];
        $title = $responce["Title"];
        $subTitle = $responce["SubTitle"];
        $price = $responce["Price"];
        $descr = $responce["description"];
        $quant = $responce["quantite"];
        echo "<p id=\"image\"> $img </p> <p id=\"title\"> $title </p> <p id=\"subTitle\"> $subTitle </p> <p id=\"price\"> $price </p> <p id=\"descr\">$descr </p><p id=\"quant\">$quant </p>";
    }

?>
