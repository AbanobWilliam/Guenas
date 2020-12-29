$(document).ready(function () {
    $('.go-to-top').click(function (e) {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        e.preventDefault();
    });
});