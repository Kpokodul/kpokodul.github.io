$(Document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

});