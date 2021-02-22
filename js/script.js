var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(document).ready(function () {
    $('.brand-side-image .side-image-left').css({
        transform: 'translate(-100px, 90px) rotate(-30deg)',
        opacity: '1'
    });
    $('.brand-side-image .side-image-right').css({
        transform: 'translate(100px, 90px) rotate(30deg)',
        opacity: '1'
    });
    if ($(window).width() < 991) {
        $('.hamburger').click(function () {
            if ($('#mobileMenu').hasClass('isopen')) {
                $('.hamburger').removeClass('toggle');
                $('#mobileMenu').removeClass('isopen').addClass('isclose');
            } else {
                $('.hamburger').addClass('toggle');
                $('#mobileMenu').addClass('isopen').removeClass('isclose');
            }
        })

        $('.brand-side-image .side-image-left').css({
            transform: 'translate(-50px, 50px) rotate(-30deg)',
            opacity: '1'
        });
        $('.brand-side-image .side-image-right').css({
            transform: 'translate(50px, 50px) rotate(30deg)',
            opacity: '1'
        });
    }

    $(window).scroll(function () {
        didScroll = true;
        var positionTop = $(window).scrollTop();
        console.log(positionTop);
        if ($(window).width() > 767) {
            if (($('.stories-sect').offset().top - 200) <= positionTop) {
                $('.mobile-review-card').addClass('animat-slideup');
            } else {
                $('.mobile-review-card').removeClass('animat-slideup');
            }
            if ((positionTop > 380) && (positionTop < 2080)) {
                $('#mobileCardScroll').addClass('scroll');
                if ((positionTop > 680) && (positionTop < 1200)) {
                    $(".stories-sect .common-subheading").addClass('animated-opacity');
                    $.each($('.stories-sect .social-pos'), function (i, el) {
                        setTimeout(function () {
                            $(el).addClass('animated-fadein-out');
                        }, 500 + (i * 300));
                    });

                } else {
                    $(".stories-sect .social-pos").removeClass('animated-fadein-out');
                    $(".stories-sect .common-subheading").removeClass('animated-opacity');
                }
                if ((positionTop > 2000) && (positionTop < 2080)) {
                    $('#mobileCardScroll').addClass('scrollfix');
                } else {
                    $('#mobileCardScroll').addClass('scroll');
                }
            } else {
                $('#mobileCardScroll').removeClass('scroll');
            }

            if (positionTop > 1700) {
                $('.deliver-sect .common-subheading').addClass('animated-opacity');
            }

            if (positionTop < 381) {
                $('#mobileCardScroll').removeClass('scrollfix');
            }

            if ($('.investment-sect').offset().top <= positionTop) {
                $('.investment-review-card').each(function () {
                    $(this).addClass('sticky-sect-scroll');
                })
            } else {
                $('.investment-review-card').removeClass('sticky-sect-scroll');
            }
        }

    });
});



// button ripple Effect
const buttons = document.querySelectorAll(".button");

buttons.forEach((a) => {
    a.addEventListener("mouseenter", function (e) {
        const xInside = e.pageX - e.target.offsetLeft;
        const yInside = e.pageY - e.target.offsetTop;
        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top = yInside + "px";
        circle.style.left = xInside + "px";
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 1000);
    });

    a.addEventListener("mouseleave", function (e) {
        const xInside = e.pageX - e.target.offsetLeft;
        const yInside = e.pageY - e.target.offsetTop;
        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top = yInside + "px";
        circle.style.left = xInside + "px";
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 1000);
    });
});

// header Scroll Reverse

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        $('header').addClass('nav-up');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up');
        }
    }

    lastScrollTop = st;
}


var $scrollingDiv = $("#mobileGraph");
$(window).scroll(function () {
    // var scrollTop = $(this).scrollTop();
    zeroSizeHeight = $('.stories-sect').height() - $(window).height();
    var currentHeight = $('.stories-sect').outerHeight();

    var availableHeight = window.innerHeight;

    var scaleX = $('#mobileGraph').height();
    var scaleY = ((availableHeight - ($('#mobileGraph').height())) / currentHeight);
    if (($('.stories-sect').offset().top + 450) <= $(window).scrollTop()) {
        $scrollingDiv.css({
            "-webkit-transform": "scale(" + scaleY + ")",
        }, 500, 'easeInOutSine');
    }
});