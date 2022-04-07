






var popup = document.getElementById('popup');
var menuBurger = document.getElementById('menu_burger');




window.addEventListener('click', () => {
    if(!menuBurger.classList.contains("menu_Burger_base")){
        menuRotate();
    }

});
// window.addEventListener('touchstart', menuRotate());

function openMoadl() {
    popup.style.display = "";
    setTimeout(() => {
        popup.classList.remove("popupBase");
        popup.classList.add("popup");
    }, 1);
    popup.removeEventListener('transitionend', function() {
        popup.style.display = "none";
    });
}

function closeMoadl() {
    popup.classList.remove("popup");
    popup.classList.add("popupBase");
    popup.addEventListener('transitionend', function() {
        if(menuBurger.classList.contains("menu_Burger_base")){
            console.log('Fin ANIM');
            if(popup.offsetHeight <= 400){
                popup.style.display = "none";
            }
            
        }
        
    });
    

}

function menuRotate(){
    if(menuBurger.classList.contains("menu_Burger_base")){
        menuBurger.classList.remove("menu_Burger_base");
        menuBurger.classList.add("menu_Burger_rotate");
        openMoadl()
    }else{
        menuBurger.classList.add("menu_Burger_base");
        menuBurger.classList.remove("menu_Burger_rotate");
        closeMoadl();
    }
}

menuBurger.addEventListener('click', (e) => {
    e.stopPropagation();
    menuRotate();
});

// menuBurger.addEventListener('touchstart', (e) => {
//     console.log("OK");
//     menuRotate();
//     e.stopPropagation();
// });