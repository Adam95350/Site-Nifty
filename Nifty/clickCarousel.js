let carousel = document.getElementById("carousel").children;
let carsouelCount = document.getElementById("carousel").childElementCount;


let title = document.getElementById("descr_title");
let subtitle = document.getElementById("descr_subtitle");
let image = document.getElementById("descr_img");
let price = document.getElementById("descr_price");
let descr = document.getElementById("descr_descr");
let quant = document.getElementById("quantite");

let error = document.getElementById('error');

    for(i=0; i < carsouelCount;i++){
        carousel[i].addEventListener('click',(e)=>{
            let target = e.target;
            let pass = false;
            while(pass==false){
                if(target.classList == "card_container"){
                    pass="true";
                }else{
                    target = target.parentNode;
                }
            }
            console.log(target.id)
            changeCardById(target.id)
        })
    };

function changeCardById(id){
    var getCard = $.ajax({
        type: 'GET',
        url: 'idrequest.php',
        data: 'id='+id,
        success: function(reponse){

            let htmlobject = $(reponse);
            let reponseImage = htmlobject[0].innerText;
            let reponseTitle = htmlobject[2].innerText;
            let reponseSubTitle = htmlobject[4].innerText;
            let reponsePrice = htmlobject[6].innerText;
            let reponseDescr = htmlobject[8].innerText;
            let reponseQuant = htmlobject[9].innerText;
            image.innerHTML = "<img src=\"" + reponseImage + "\"/>";
            title.innerText = reponseTitle;
            subtitle.innerText = reponseSubTitle;
            price.innerText = reponsePrice + "€";
            descr.innerText = reponseDescr;
            quant.innerText = reponseQuant + "ml";
            console.log(htmlobject);
        }
    })
}