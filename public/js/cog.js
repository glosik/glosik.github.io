$(document).ready(function () {
    $(window).scroll(function (e) {
        var top = $(document).scrollTop();
        $('#cog').css({
            '-webkit-transform': 'rotate(' + top / 3 + 'deg)',
            '-moz-transform': 'rotate(' + top / 3 + 'deg)',
            '-o-transform': 'rotate(' + top / 3 + 'deg)',
            '-ms-transform': 'rotate(' + top / 3 + 'deg)',
            'transform': 'rotate(' + top / 3 + 'deg)'
        });
    });
    $('#more').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});