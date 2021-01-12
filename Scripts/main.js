
$('.btn-cart').on('click', function (e) {
    e.stopPropagation();
    $('.list-cart').toggleClass('show');
})  

$('body').on('click', function (e) {
    $('.list-cart').removeClass('show');
})


$(window).on("DOMContentLoaded", function () {
    $('.backtotop').on("click", function(){
        $('html').animate({
            'scrollTop': 0,
            'scrollBehavior' : 'smooth'
        })
    });
})

$(window).on("scroll", function () {
    let scrollTop = $('html').scrollTop();
    if (scrollTop < $('header').innerHeight()) {
        $('.backtotop').removeClass('active')
    }
    //else if ((scrollTop + $(window).outerHeight()) > $('footer').offset().top)
    //{
    //    $('.backtotop').removeClass('active')
    //}
    else {
        $('.backtotop').addClass('active')
    }
})