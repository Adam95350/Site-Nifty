<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style1.css">
        <link rel="stylesheet" href="map\SectionMap.css">
        <title>HEADER</title>
    </head>

    <body>
        <div id="popup" class="popupBase" style="display: none;">
            <h2>
                <a>Menu</a>
            </h2>
            <div>
                <ul>
                    <li><a href="#1">À propos</a></li>
                    <li><a href="#map">Nous trouver</a></li>
                    <li><a href="#3">Nos produits</a></li>
                    <li><a href="#4" id="bouttonMobile">Notre offre</a></li>
                    <li><a href="#4" id="proMobile">Professionnel</a></li>
                </ul>
            </div>
        </div> 
        <header class="main-head">
            
            <nav>
                <div id="header_container">
                    <div id="header_logo">
                        <a href="#" id="logo"><img src="https://cdn.vivlab.com/1616178540236-logo-detoure.jpg"/></a>
                    </div>
                    <div id="header_body">
                        <ul>
                            <li>  <a href="Testheader.php#engagement">À propos</a> </svg> </li>
                            <li><a href="Testheader.php#map">Nous trouver</a></li>
                            <li><a href="Testheader.php#3">Nos produits</a></li>
                            <li><a href="pageNotreOffre2.html" id="boutton">Notre offre</a></li>
                            <li>  <a href="pageNotreOffre2.html" id="pro">Professionnel</a> </svg> </li>
                        </ul>
                    </div>
                    
                    
                </div>
                <div id="menu_burger" class="menu_Burger_base">
                    <span id="menu_burger_span"></span>
                </div>
            </nav>

        </header>
        <main>
            <div class="main" style="">
                
                <div id="0">
                    <div id="mainMenu">
                        <div id="mainMenu_Body">
                            <div id="mainMenu_text">
                                <div class="main_test">
                                    <h1>Tout ce qu'il vous faut à portée de main</h1>
                                    <p>Nifty, c’est le service de distribution automatique de produits d’hygiène et de beauté ! La fraîcheur est au rendez-vous …</p>
                                </div>
                            </div>
                            <div id="mainMenu_button">
                                <!-- <a id="left" href="#1"><div id="container_left">Découvrir</div></a> -->
                                <button id="buttonDiscover" onclick="window.location.href='#1'">Nous trouver</button>
                                <!-- <div id="container_right"><a id="right" href="#1">Nous trouver</a></div> -->
                                <button id="buttonFind" onclick="window.location.href='#1'">Nous trouver</button>
                            </div>
                        </div>
                        <div id="mainMenu_img">
                            <img src="https://lecasierfrancais.fr/wp-content/uploads/2019/11/zoom-case-3.jpg"/>
                        </div>
                    </div>      

                </div>

                <div id="propos" style="margin-left:203px; margin-right:203px;">
                    <?php require "apropos.php"?>
                </div> 

                
                <div id="engagement" style="margin-top: 150px; margin-bottom: 150px; margin-left:203px; margin-right:203px;" >
                    <h1>Nos engagements</h1>
                    <div style="margin-top: 15px; display: flex; justify-content: space-around;">
                        <div class="card_container">
                            <div class="card_img">
                                <img src=""/>
                            </div>
                            <div class="card_body">
                                <div class="card_title">
                                    <p>Des produits tendances</p>
                                </div>
                                <div class="card_text">
                                    <p>Une offre dynamique avec des nouveautés présentées régulièrement, des offres exclusives, et des marques de renommée telles que Labello, Merci Handy et autres…</p>
                                </div>
                            </div>
                        </div>
                        <div class="card_container">
                            <div class="card_img">
                                <img src=""/>
                            </div>
                            <div class="card_body">
                                <div class="card_title">
                                    <p>Des prix accessibles</p>
                                </div>
                                <div class="card_text">
                                    <p>Le prix de nos produits n’excède jamais celui proposé en grande distribution, de façon à vous garantir un maximum d’accessibilité, sans entamer votre portefeuille !</p>
                                </div>
                            </div>
                        </div>
                        <div class="card_container">
                            <div class="card_img">
                                <img src=""/>
                            </div>
                            <div class="card_body">
                                <div class="card_title">
                                    <p>Une démarche éco-responsable</p>
                                </div>
                                <div class="card_text">
                                    <p>50% de nos produits sont déjà eco-responsables suite à vos retours, disponibles dans nos distributeurs à basse consommation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map" style="height: 100%; width: 100%;">
                    <iframe style="height:1080px; width:100%;" id="map"src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20944.85655124466!2d2.2314475!3d48.98951984999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1642263680892!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy"></iframe>
                    <div class="box">
                    <p id="Trouver">Trouvez un distributeur</p>
                        <label for="name">Ou allez-vous ? </label>
                        <input  type="text" id="CodePostal" name="name" placeholder=" Code postal "> 
                        <input id="buttonDiscover" type="button" value="Rechercher">
                    </div>
                
                </div>
                <div id="1" style="margin-top: -250px; margin-bottom: 150px;">
                    <div style="margin-left:203px; margin-right:203px;"> 
                        <h1 style="size:51px">Nos Produits</h1>
                        <p>Retrouvez un sélection d’articles fraîcheur et beauté dans nos distributeurs Nifty. Soyez attentifs aux nouveautés présentes tous les mois en distributeur et téléchargez notre application mobile pour pouvoir voter pour vos produits préférés !</p>
                    </div>
                    <div id="divdescr" style="display:flex; margin-left: 203px; margin-bottom:90px">
                        <div id="card" style="margin-right:203px">
                        <div class="card_container">
                            <div id="descr_img" class="card_img">
                                <img   src="img\hollywood-ice-fresh.jpg"/>
                            </div>
                            <div class="card_body">
                                <div class="card_title">
                                    <p id="descr_title">Spray</p>
                                </div>
                                <div class="card_text">
                                    <p id="descr_subtitle">Spray</p>
                                </div>
                                <div class="card_price">
                                    <p id="descr_price">25€</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div id="desrc" style="width:828px">
                            <p id="descr_descr">Les spray Hygie vous permettent de désinfecter et nettoyer vos écran à tout moment grâce à leur format ultra-pratique qui tient dans la poche. Les sprays Hygie tuent jusqu’à 99% des 7000 bactéries présentes sur votre téléphone afin de prévenir l’apparition de différentes maladies telles que la salmonelle ou le coronavirus.</p>
                            <p id="quantite">20ml</p>
                            <div id="inf" style="display:flex">
                                <p>Fabriquer en france</p>
                                <p>Exclusivité Nifty</p>
                                <p>Parfum citron</p>
                            </div>
                        </div>
                    </div>
                    <div id="carousel">
                        <?php require "carousel.php" ?>
                    </div>
                </div>
                <div style="margin-left:203px;margin-right:203px;text-align:center;">
                    <h1>Téléchargez notre application mobile!</h1>
                    <p>Téléchargez notre application mobile pour savoir à tout moment où est le distributeur Nifty le plus proche, suivre nos sorties produit, voter pour vos préférences et profiter de nombreux avantages à venir.</p>
                </div>
            </div>
            <footer>
            <div class="contenu-footer">
                <div class="left">
                    <div class="contact">
                        <h3>Contact</h3>
                        <a href="#">contact@mynitfty.fr</a>
                        <a href="#">+33 6 95 88 99 45</a>
                    </div>
                    <div class="blog">
                        <h3>Blog</h3>
                        <a href="#">Derniers articles</a>
                        <a href="#">Contribuer</a>
                    </div>                
                    <div class="liens-utiles">
                        <h3>Liens utiles</h3>
                        <a href="#">Kit presse</a>
                    </div>
                </div>
                <div class="logo">
                    <h3>Suivez-nous</h3>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div class="no-link">
                CGV
                Confidentialité
                2021 Nifty
            </div>
        </footer>
        </main>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="myJqueryScript.js"></script>
        <script src="menuberuger.js"></script>
        <script src="Carousel.js"></script>
        <script src="clickCarousel.js"></script>
    </body>
</html>