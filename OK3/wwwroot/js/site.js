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
        'dandabsMC'
    ],
    loop: true,
    backSpeed: 40,
  });

$(document).ready(_ => {
        var diff_ms = Date.now() - new Date(2005, 7, 5).getTime();
        var age_dt = new Date(diff_ms); 

        $('#sub').text(Math.abs(age_dt.getUTCFullYear() - 1970) + " year old developer and aspiring polygot; obsessed with Nordic countries.");

        window.fitText( document.getElementById("title"), 2 );
        window.fitText( document.getElementById("pf"), 2 );
        window.fitText( document.getElementById("tm"), 2 );

});
