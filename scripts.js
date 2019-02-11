// BS. Scrollspy
$('body').scrollspy({ target: '#mainNavbar' })

$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })

// BS. Navbar scrolling
$(function () {
    $(document).scroll(function() {
        let $nav = $('#mainNavbar');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    })
})

// Hamburger Icon animation
$(document).ready(function () {
    $('.navbar-toggler').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });
});

// Copyright Date Script
let dates = document.querySelector('span#date');

if (new Date().getFullYear()>2018) {
    let dateCopyright = new Date().getFullYear();
    dates.textContent = `-${dateCopyright}`;
}

// Global site tag (gtag.js) - Google Analytics Script
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-131142493-1');