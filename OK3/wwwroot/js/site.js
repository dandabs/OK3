// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var typed = new Typed('#navbartitle', {
    typeSpeed: 40,
    strings: [
        'dandabs',
        'paistinpannu',
        'Ochikonde',
        'thatfakefinn',
        'peloissaan_',
        'ArticPolarBear1',
        'kindakool',
        'Wee Chilly',
        'dandabsMC',
        'dandobs',
    ],
    loop: true,
    backSpeed: 40,
  });

$(document).ready(_ => {
        var diff_ms = Date.now() - new Date(2005, 7, 5).getTime();
        var age_dt = new Date(diff_ms); 

        $('#sub').text(Math.abs(age_dt.getUTCFullYear() - 1970) + " year old developer and aspiring polyglot; tuleva suomalainen.");

        window.fitText( document.getElementById("title"), 2 );
        window.fitText( document.getElementById("pf"), 2 );
        window.fitText( document.getElementById("tm"), 2 );
        window.fitText( document.getElementById("smed"), 2 );

});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#carouselCoding"]')
  .not('[href="#carouselVideography"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$(document).ready(function() {
  $(".convert-emoji").each(function() {
      var original = $(this).html();
      // use .shortnameToImage if only converting shortnames (for slightly better performance)
      var converted = joypixels.toImage(original);
      $(this).html(converted);
  });
});
