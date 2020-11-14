$(document).ready(function() {
         
        $(window).scroll(function() {
          
          if($(this).scrollTop() > 500) { 
              $('.navbar').addClass('solid');
          } 
          else {
              $('.navbar').removeClass('solid');
          }
        });
});


