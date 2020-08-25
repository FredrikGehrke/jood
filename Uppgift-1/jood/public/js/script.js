$(document).ready(function() {

    var owl = $('#owl');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    })

    var owl2 = $('#owl2');
    // owl2.children().each( function( index ) {
    //     $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    // });
    owl2.owlCarousel({
        items: 5,
        loop: true,
        margin: 30, 
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

})