$(document).ready(function() {

    var owl2 = $('#owl2');
    owl2.owlCarousel({
        items: 4,
        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    })

    $('.loop').owlCarousel({
        center: true,
        items: 5,
        loop: true,
        margin: 25, 
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        center: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    }) 

// AOS INIT
    AOS.init();

})