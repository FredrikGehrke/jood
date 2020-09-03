$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
                margin:30,
            },
            1000:{
                items:3,
            }
        }
    })

    // $('.owl-carousel').owlCarousel({
    //     items: 3,
    //     loop: true,
    //     margin: 50, 
    //     autoplay: false,
    //     autoWidth: false,
    //     loop: true,
    //     nav: true,
    //     navText: [
    //         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    //         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    //     ],
    // }) 

    // AOS INIT
    // AOS.init();

})