
/* Navbar Shrink */

/*
$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('nav').addClass('scrolled');
        $('nav').addClass('fixed-top');
        
     }
    else {
      $('nav').removeClass('scrolled');
      $('nav').removeClass('fixed-top');
    }
  });
});
*/

/* Smooth SCrolling */

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




/* TypeJS components */

new TypeIt(".small-heading", {
  strings: "The Next Web is another leading blog on the internet which provides technology stuff on the daily basis to internet users. ",
  speed: 65,
  waitUntilVisible: true
}).go();


new TypeIt(".articles-text-left-bottom", {
  strings: "Read more",
  speed: 120,
  waitUntilVisible: true
}).go();




/* Loading Animation */


 setTimeout(function(){


  $('.loader_bg').fadeToggle();
 }, 1300);



/* Scroll Top Animation */

$(document).ready(function(){

  
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#btnScrollToTop').fadeIn();
        } else {
            $('#btnScrollToTop').fadeOut();
        }
    });

  
    $('#btnScrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},1200);
        return false;
    });

});
