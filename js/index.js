var fixed = false;
$(document).scroll(function() {
    if( $(this).scrollTop() >= 650 ) {
        if( !fixed ) {
            fixed = true;
            $('li a').css({color:'black'});
        }
    } else {
        if( fixed ) {
            fixed = false;
            $('li a').css({color:'white'});
        }
    }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function(){
    $(".title").css("opacity", 1 - $(window).scrollTop() / 250);
  });
$(window).scroll(function(){
    $(".subtitle").css("opacity", 1 - $(window).scrollTop() / 350);
  });

$(window).scroll(function(){
    $(".logo").css("opacity", 1 - $(window).scrollTop() / 3000);
  });