/**
 * permet d'ajouter la navigation tactil
 */

class CarouselTouchPlugin{
    /**
     * 
     * @param {Carousel} carousel 
     */
    
    constructor(carousel){
        carousel.container.addEventListener('dragstart', e => e.preventDefault());
        carousel.container.addEventListener('mousedown', e => e.preventDefault());
        carousel.container.addEventListener('mousedown', this.startDrag.bind(this));
        carousel.container.addEventListener('touchstart', this.startDrag.bind(this));
        window.addEventListener('mousemove', this.drag.bind(this));
        window.addEventListener('touchmove', this.drag.bind(this));
        carousel.element.addEventListener('mouseup', this.endDrag.bind(this));
        carousel.element.addEventListener('touchend', this.endDrag.bind(this));
        carousel.element.addEventListener('touchcancel', this.endDrag.bind(this));
        this.carousel = carousel;
    }
    /**
     * Démarre le déplacement au touché sur le carousel
     * @param {MouseEvent|TouchEvent} e 
     */
    startDrag (e){
        if(e.touches){
            
            if(e.touches.length > 1){
                return;
            }else{
                e = e.touches[0];
            }
        }
        this.origin = {x: e.screenX, y: e.screenY};
        this.width = this.carousel.containerWitdh;
        this.carousel.disableTransition();
        
    }
    /**
     * Déplacement de la sourie ou du tactile
     * @param {MouseEvent|TouchEvent} e 
     */
    drag(e){
        if(this.origin){
            let point = e.touches ? e.touches[0] : e;
            let translate = {x: point.screenX - this.origin.x, y: point.screenY - this.origin.y};
            
            if(e.touches && Math.abs(translate.x) > Math.abs(translate.y)){

                e.stopPropagation();
            }
            if(this.carousel.currentItem == 0){
                if(translate.x < 0){
                    let baseTranslate = this.carousel.currentItem * -100 / this.carousel.items.length;
                    this.lastTranslate = translate;
                    this.carousel.translate(baseTranslate + 100 * translate.x / this.width);
                }else{
                    
                }
                
            }else if(this.carousel.currentItem == this.carousel.items.length - this.carousel.slidesVisible ){
                if(translate.x < 0){
                    
                }else{
                    let baseTranslate = this.carousel.currentItem * -100 / this.carousel.items.length;
                    this.lastTranslate = translate;
                    this.carousel.translate(baseTranslate + 100 * translate.x / this.width);
                }
            }else{
                let baseTranslate = this.carousel.currentItem * -100 / this.carousel.items.length;
                this.lastTranslate = translate;
                this.carousel.translate(baseTranslate + 100 * translate.x / this.width);
            }
            
        }
    }

     /**
     * fin le déplacement au touché sur le carousel
     * @param {MouseEvent|TouchEvent} e 
     */
    endDrag (e){
        if(this.origin && this.lastTranslate){
            this.carousel.enableTransition();
            if(Math.abs(this.lastTranslate.x / this.carousel.carouselWidth) > 0.2 ){
                if(this.lastTranslate.x < 0){
                    this.carousel.next();
                    
                }else{
                    this.carousel.prev();
                }
            }else{
                this.carousel.gotoItem(this.carousel.currentItem);
            }
            this.origin = null;
        }
        
    }

}

class Carousel{
    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options
     * @param {Object} [options.slidesToScroll=1] Nombre d'éléments à faire défiler
     * @param {Object} [options.slidesToScroll=1] Nombre d'éléments Visible dans un slides
     * @param {boolean} [options.loop=false] doit-t-on bouclé en fin de carousel
     * @param {boolean} [option.pagination=false]
     * @param {boolean} [option.navigation=true]
     * @param {boolean} [option.infinite=false]
     */
    constructor (element, options = {}){
        
        this.element = element;
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false,
            pagination: false,
            navigation: true,
            infinite: false
        }, options);
        let children = [].slice.call(element.children);
        this.isMobile = false;
        this.currentItem = 0;
        this.moveCallBack = [];

        //Modification du DOM
        this.root = this.createDivWithClass('carousel');
        
        this.container = this.createDivWithClass('carousel_container');
        this.root.setAttribute('tabindex', '0');
        this.root.appendChild(this.container);
        this.element.appendChild(this.root);
        this.items = children.map(child => {
            let item = this.createDivWithClass('carousel_item');
            item.appendChild(child);
            return item;
        });

        if(this.options.infinite){
            this.offset = this.options.slidesVisible * 2 - 1;
            this.items = [
                ...this.items.slice(this.items.length - this.offset).map(item => item.cloneNode(true)),
                ...this.items,
                ...this.items.slice(0, this.offset).map(item => item.cloneNode(true))
            ];
            this.gotoItem(this.offset, false);
        }
        
        this.items.forEach(item =>{
            this.container.appendChild(item);
        });
        this.setStyle();
        if(this.options.navigation){
            this.createNavigation();
        }
        
        if(this.options.pagination){
            this.createPagination();
        }
        

        //Evenenement
        this.moveCallBack.forEach(cb => cb(this.currentItem));
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize.bind(this));
        this.root.addEventListener('keydown', e => {
            if(e.key === 'ArrowRight'){
                this.next();
            }else if(e.key === 'ArrowLeft'){
                this.prev();
            }
        });
        if(this.options.infinite){
            this.container.addEventListener('transitionend', this.resetInfinite.bind(this))
        }
        new CarouselTouchPlugin(this);
    }

    /**
     * 
     * @param {string} className
     * @return {HTMLElement}
     */
    createDivWithClass(className){
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div;
    }

    disableTransition(){
        this.container.style.transition = 'none';
    }

    enableTransition(){
        this.container.style.transition = '';
    }

    /**
     * Applique les bonne dimensions aux élément du carousel
     */
    setStyle(){
        let ratio = this.items.length / this.slidesVisible;
        this.container.style.width = (ratio * 100) + "%";
        this.items.forEach(item => {
            item.style.width = ((100 / this.slidesVisible) / ratio) + "%" ;
        });
    }
    /**
     * Créer les flêche de navigation
     */
    createNavigation (){

        let nextButton = this.createDivWithClass('carousel_next');
        let prevButton = this.createDivWithClass('carousel_prev');
        this.root.appendChild(nextButton);
        this.root.appendChild(prevButton);
        nextButton.addEventListener('click', this.next.bind(this));
        prevButton.addEventListener('click', this.prev.bind(this));
        if(!this.options.loop){
            this.onMove(index =>{
                if(index === 0 ){
                    prevButton.classList.add('carousel_prev--hidden');
                }else{
                    prevButton.classList.remove('carousel_prev--hidden');
                }
                if(index >= this.items.length - this.slidesVisible){
                    nextButton.classList.add('carousel_next--hidden');
                }else{
                    
                    nextButton.classList.remove('carousel_next--hidden');
                }
            });
        }
        
    }

    /**
     * Créer la pagination dans le DOM
     */
    createPagination (){

        let pagination = this.createDivWithClass('carousel_pagination');
        let buttons = [];
        this.root.appendChild(pagination);
        for(let i = 0; i < this.items.length; i = i + this.options.slidesToScroll ){
            
            if(i + this.slidesVisible > this.items.length){
            }else{
                let button =  this.createDivWithClass('carousel_pagination_button');
            button.addEventListener('click', () => {
                
                this.gotoItem(i);
            });
            pagination.appendChild(button);
            buttons.push(button);
            }
        }
        this.onMove(index =>{
            let activeButton = buttons[Math.floor(index/this.options.slidesToScroll)];
            if(activeButton){
                buttons.forEach(button => button.classList.remove('carousel_pagination_button--active'));
                activeButton.classList.add('carousel_pagination_button--active');
            }
        })
        
    }

    translate(percent){
        this.container.style.transform = "translate3d(" + percent + "%, 0, 0)";
    }

    next(){
        
        this.gotoItem(this.currentItem + this.slidesToScroll);
    }

    prev(){
        this.gotoItem(this.currentItem - this.slidesToScroll);
    }

    /**
     * Déplace le carousel vers l'élement ciblé
     * @param {number} index
     * @param {boolean} [animation=true]
     */
    gotoItem(index, animation = true){
        
        if(index < 0 ){
            if(this.options.loop){
                index = this.items.length - this.slidesVisible;
            }else{
                return
            }
            
        }else if(index > this.items.length - this.slidesVisible){
            if(this.options.loop){
                index = 0;
            }else{
                return
            }
        }
        let translateX = -100 / this.items.length * index;
        if(animation === false){
            this.disableTransition();
        }
        this.translate(translateX);
        
        this.container.offsetHeight; //Force le repaint (mise a jour) de la page
        if(animation === false){
            this.enableTransition();
        }
        
        this.currentItem = index;
        this.moveCallBack.forEach(cb => cb(index));
    }


    /**
     * Déplace le container pour slide infini
     */
    resetInfinite(){
        if(this.currentItem <= this.options.slidesToScroll){
            this.gotoItem(this.currentItem + this.items.length - 2 * this.offset, false);
        }else if(this.currentItem  >= this.items.length - this.offset){
            this.gotoItem(this.currentItem - (this.items.length - 2 * this.offset), false);
        }
    }

    /**
     * 
     * @param {callBack} cb 
     */
    onMove(cb){
        this.moveCallBack.push(cb);
    }

    onWindowResize(){

        let mobile = window.innerWidth < 1100;
        // document.getElementById('mobile').innerText = window.innerWidth;

        if(mobile !== this.isMobile){

            
            this.isMobile = mobile;
            if(!this.isMobile){
                this.gotoItem(this.items.length - this.slidesVisible);
            }
            this.setStyle();
            this.moveCallBack.forEach(cb => cb(this.currentItem));
        }
    }

    /**
     * @returns {number}
     */
    get slidesToScroll(){
        return this.isMobile ? 1 : this.options.slidesToScroll;
    }

    /**
     * @returns {number}
     */
    get slidesVisible(){
        return this.isMobile ? 1 : this.options.slidesVisible;
    }

    /**
     * @returns {number} 
     */
    get containerWitdh(){
        return this.container.offsetWidth;
    }
    /**
     * @returns {number}
     */
    get carouselWidth(){
        return this.root.offsetWidth;
    }
}




document.addEventListener('DOMContentLoaded',function(){
    new Carousel(document.querySelector('#carousel'), {
        slidesVisible: 4
    });
});