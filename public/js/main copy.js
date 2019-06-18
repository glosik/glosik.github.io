$(document).ready(function () {
    //Globals
    var resize = null,
        limitSm = 768,
        loadedSm = false,
        loadedXl = false,
        form = $('#main-contact-form'),
        btn = $('#top-menu a'),
        close = $('.box');
    
//***************************************************//
    
    //load mobile scripts
    function loadSm() {
        var image, numSlides, activeSlide, speed, fade, timer, pause;
        image = $("#slider li");
        numSlides = image.length; //returns the number of elements, starting from 0.
        activeSlide = 0;
        speed = 6000;
        fade = 100;
        timer = setInterval(rotate, speed);
        image.eq(activeSlide).show().addClass('active');
            //Pause on hover
        $("#slider, #prev, #next").hover(function () {
            clearInterval(timer);
            pause = true;
        }, function () {
            timer = setInterval(rotate, speed);
            pause = false;
        });
            //Arrows navigation
        $("#prev").click(function (event) {
            activeSlide--;
            rotate();
            event.preventDefault();
        });

        $("#next").click(function (event) {
            activeSlide++;
            rotate();
            event.preventDefault();
        });

            // Rotator
        function rotate() {
            if (!pause === true) {
                activeSlide++;
            }
            if (activeSlide === numSlides) {
                activeSlide = 0;
            }
            if (activeSlide < 0) {
                activeSlide = numSlides - 1;
            }
            image.not(activeSlide).fadeOut(fade).removeClass('active');
            image.eq(activeSlide).fadeIn(fade).addClass('active');
        }

            // Drawing path svg with walkway   
//        var svg = new Walkway({ // Overwriting defaults
//            selector: 'svg',
//            duration: '4000',
//            // can pass in a function or a string like 'easeOutQuint'
//            easing: function (t) {
//                return t * t;
//            }
//        });
//        $('#top-menu a[href="#about"]').click(function () {
//            svg.draw(); //draw svg on click
//        });


        // Activate button
        btn.click(function (event) {
            btn.removeClass('active');
            $(this).addClass('active');
        }); 
        close.click(function (event) {
            btn.removeClass('active');
            $('#home').addClass('active');
        });
    }
        //load desktop scripts
    function loadXl() {
        var navbar = $("#top"),
            totop = $("#totop"),
            contact = $("#contact .card");
        //***************************** smooth scroll
        $(function () {
            $('#top a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 32
                        }, 1000);
                        return false;
                    }
                }
            });
        });
        //***************************** Button to top
        totop.click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
            //***************************** Scroll based animation
        $(window).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 1) {
                totop.addClass("slide");
                navbar.addClass("sticky");
            } else {
                totop.removeClass("slide");
                navbar.removeClass("sticky");
            }
            if (y > 960) {
                contact.addClass("visible");
            }
            if (y > 200) {
                $('#slider li').addClass("fadein");
            } else {
                $('#slider li').removeClass("fadein");
            }
        });
            //***************************** Particles
//       particlesJS("particles-js", {
//            "particles": {
//                "number": {
//                    "value": 300,
//                    "density": {
//                        "enable": true,
//                        "value_area": 800
//                    }
//                },
//                "color": {
//                    "value": "#fffcc0"
//                },
//                "shape": {
//                    "type": "star",
//                    "stroke": {
//                        "width": 0,
//                        "color": "#000ccc"
//                    },
//                    "polygon": {
//                        "nb_sides": 5
//                    },
//                    "image": {
//                        "src": "img/github.svg",
//                        "width": 50,
//                        "height": 20
//                    }
//                },
//                "opacity": {
//                    "value": 0.2,
//                    "random": true,
//                    "anim": {
//                        "enable": true,
//                        "speed": 0.1,
//                        "opacity_min": 0.05,
//                        "sync": true
//                    }
//                },
//                "size": {
//                    "value": 5,
//                    "random": true,
//                    "anim": {
//                        "enable": true,
//                        "speed": 0.5,
//                        "size_min": 0.1,
//                        "sync": false
//                    }
//                },
//                "line_linked": {
//                    "enable": false,
//                    "distance": 150,
//                    "color": "#ffffff",
//                    "opacity": 0.4,
//                    "width": 1
//                },
//                "move": {
//                    "enable": true,
//                    "speed": 0.3,
//                    "direction": "bottom",
//                    "random": true,
//                    "straight": false,
//                    "out_mode": "out",
//                    "bounce": true,
//                    "attract": {
//                        "enable": true,
//                        "rotateX": 600,
//                        "rotateY": 1200
//                    }
//                }
//            },
//            "interactivity": {
//                "detect_on": "canvas",
//                "events": {
//                    "onhover": {
//                        "enable": true,
//                        "mode": "grab"
//                    },
//                    "onclick": {
//                        "enable": true,
//                        "mode": "repulse"
//                    },
//                    "resize": false
//                },
//                "modes": {
//                    "grab": {
//                        "distance": 140,
//                        "line_linked": {
//                            "opacity": 1
//                        }
//                    },
//                    "bubble": {
//                        "distance": 400,
//                        "size": 40,
//                        "duration": 2,
//                        "opacity": 8,
//                        "speed": 3
//                    },
//                    "repulse": {
//                        "distance": 200,
//                        "duration": 0.4
//                    },
//                    "push": {
//                        "particles_nb": 4
//                    },
//                    "remove": {
//                        "particles_nb": 2
//                    }
//                }
//            },
//            "retina_detect": true
//        });
    }
        //***************************** Screen size based routing
    function logistics() {
        var cw = document.documentElement.clientWidth;
        if (cw < limitSm) {
            if (!loadedSm) {
                loadSm();
                loadedSm = true;
            }
        } else {
            if (!loadedXl) {
                loadXl();
                loadedXl = true;
            }
        }
    };
    // Screen sized reloading:
    window.onload = logistics();
    window.onresize = function () {
        if (resize != null) {
            clearTimeout(resize);
        }
        resize = setTimeout(function () {
            console.log("window resized");
            logistics();
        }, 750);
    };

});