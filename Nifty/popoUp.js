var btnPopup = document.getElementById('btnPopup');


var popup = document.getElementById('popup');

btnPopup.addEventListener('click',(e) => {
    e.stopPropagation();    
    openMoadl();
});
btnPopup.addEventListener('click',() => {popup.style.display = "";});
let menuOpen = true;


window.addEventListener('click', closeMoadl);
window.addEventListener('touchstart', closeMoadl);

function openMoadl() {
    menuOpen = false;

    setTimeout(() => {
        popup.classList.remove("popupBase");
        popup.classList.add("popup");
    }, 1);

    

}

function closeMoadl() {
        popup.classList.remove("popup");
        popup.classList.add("popupBase");
        popup.addEventListener('transitionend', function() {
            if(menuOpen){
                popup.style.display = "none";
                console.log("OK");
                return;
            }
        });
        menuOpen = true;
}

