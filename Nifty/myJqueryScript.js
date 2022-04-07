// const header = $('nav');
// $(window).on('scroll', function(){
//     let scroll = window.scrollY;
//     if(scroll >= 100){
//         header.addClass('anim-nav');
//     }else{
//         header.removeClass('anim-nav');
//     }
//     $('#titre').text(scroll);
// });

// Select all links with hashes
$('a[href*="#"]').click(function(event) {
      var target = $(this.hash);
      console.log(target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      console.log(target);
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 300
        }, 1000, function() {
        });
      }
});

