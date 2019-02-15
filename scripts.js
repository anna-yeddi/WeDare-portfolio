// BS. Scrollspy
$('body').scrollspy({ target: '#mainNavbar' })

$('[data-spy="scroll"]').each(function () {
    let $spy = $(this).scrollspy('refresh')
  })

// BS. Navbar scrolling
$(function () {
    $(document).scroll(function() {
        let $nav = $('#mainNavbar');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $nav.toggleClass('shadow', $(this).scrollTop() > $nav.height());
    })
})

// Scroll Indicator (captures percentage)
// - inspired by Bloomberg Article Scroll Indicator, a pen by Derek Palladino, published at: https://codepen.io/derekjp/pen/pJzpxB
$(window).scroll(function(){
    let wintop = $(window).scrollTop(), docheight = 
        $(document).height(), winheight = $(window).height();
    let scrolled = (wintop/(docheight-winheight))*100;

    $('.scroll-line').css('width', (scrolled + '%'));
});

// Hamburger Icon animation
$(document).ready(function () {
    $('.navbar-toggler').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });
});

// Copyright Date Script
let copyDates = document.querySelector('span#copyDate'),
    pubStr = document.querySelector('span#pubDate'),
    pubNum = parseInt(pubStr.textContent);

if (new Date().getFullYear()>pubNum) {
    let currDate = new Date().getFullYear();
    copyDates.textContent = `-${currDate}`;
}

// Global site tag (gtag.js) - Google Analytics Script
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-131142493-1');