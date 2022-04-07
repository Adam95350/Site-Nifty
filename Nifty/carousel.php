<?php require_once "modelCarousel.php";
    $m = MODELCAROUSEL::getClass();
    $card = $m->getCard("apropos");
?>

<?php foreach($card as $v):?>

<div class="card_container" id=<?= $v['id']?>>
    <div class="card_img">
        <img src="<?= $v['image'] ?>"/>
    </div>
    <div class="card_body">
        <div class="card_title">
            <p><?= $v['Title']?></p>
        </div>
        <div class="card_text">
            <p><?= $v['SubTitle']?></p>
        </div>
        <div class="card_price">
            <p><?= $v['Price']?>€</p>
        </div>
    </div>
</div>

<?php endforeach?>
