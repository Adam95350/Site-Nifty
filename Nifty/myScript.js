const navigation = document.querySelector('nav');
const titre = document.getElementById('titre');


window.addEventListener('scroll', () => {

    if(window.scrollY > 100){
        navigation.classList.add('anim-nav');
    } else {
        navigation.classList.remove('anim-nav');
    }

    titre.innerText = window.scrollY;

})

//Scroll Animation test

function animate(elem, style, unit, from, to, time, prop) {
    console.log('OK');
    if (!elem) {
      return;
    }
    let start = new Date().getTime(),

        timer = setInterval(function() {
        
        var step = Math.min(1, (new Date().getTime() - start) / time);
        if (prop) {
            
            elem[style] = (from + step * (to - from)) + unit;
            console.log((from + step * (to - from)) + unit);
        }else {
            elem.style[style] = (from + step * (to - from)) + unit;
        }
        if (step === 1) {
            clearInterval(timer);
        }
      }, 25);
    if (prop) {
        elem[style] = from + unit;
    } else {
        elem.style[style] = from + unit;
    }
  }
  
//   window.onload = function() {
//     var target = document.getElementById("2");
//     animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 1000, true);
// };

const propos = document.getElementById('propos');
const trouver = document.getElementById('trouver');
const produit = document.getElementById('produit');
const offre = document.getElementById('offre');

propos.addEventListener('click', function(event){
    
    let scroll = window.scrollY;
    let anchor = document.getElementById('1');
    animate(document.scrollingElement || document.documentElement, "scrollTop", "", scroll, anchor.offsetTop, 1000, true);
    event.preventDefault();

});

trouver.addEventListener('click', function(event){
    let scroll = window.scrollY;
    let anchor = document.getElementById('2');
    animate(document.scrollingElement || document.documentElement, "scrollTop", "", scroll, anchor.offsetTop, 1000, true);
    event.preventDefault();
});

produit.addEventListener('click', function(event){
    let scroll = window.scrollY;
    let anchor = document.getElementById('3');
    animate(document.scrollingElement || document.documentElement, "scrollTop", "", scroll, anchor.offsetTop, 1000, true);
    event.preventDefault();
});

offre.addEventListener('click', function(event){
    let scroll = window.scrollY;
    
    let href = this.querySelector('a').getAttribute('href')[1];
    
    console.log(href);
    console.log();
    let anchor = document.getElementById(href);
    animate(document.scrollingElement || document.documentElement, "scrollTop", "", scroll, anchor.offsetTop, 1000, true);
    event.preventDefault();
});



//Anim click

// window.addEventListener('click', (e) => {
//     // console.log(e);

//     const rond = document.createElement('div');
//     rond.className = 'clickAnim';
//     rond.style.top = `${e.pageY - 50}px`;
//     rond.style.left = `${e.pageX - 50}px`;
//     document.body.appendChild(rond);

//     setTimeout(() => {
//         rond.remove();
//     }, 1500)
// })


// //Animation input

// const validationInput = document.querySelector('input');

// validationInput.addEventListener('input', (e) => {

//     if(e.target.value.length >= 3) {
//         validationInput.style.borderColor = "green";
//     } else {
//         validationInput.style.borderColor = "red";
//     }

// })