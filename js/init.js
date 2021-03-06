

$(document).ready(function() {
    $('select').niceSelect();

    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
    });

    $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout: 2000,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

    $('html').niceScroll({
        cursorcolor: '#fab915',
        cursorwidth: 8,
        cursorborderradius: 5,
        cursorborder: '1px solid #fab915'
        
    });
});
