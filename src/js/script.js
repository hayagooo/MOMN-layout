function redirect(URL) {
    window.location.href = URL
}

$("body").on('click', '.toggle-password', function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#password");
    if (input.attr("type") === "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }

});

$("#left input").focus(function () {
    $("#right").attr('class', 'col-md-8 col-12 p-0 mr-0 bg-spring-green')
    $("#left").attr('class', 'col-md-4 col-12 p-0')
    $("#btn-masuk").addClass('w-100 my-4')
    $(".form-login-manual").removeClass('col-md-8').addClass('col-md-10')
    $(".form-login-manual form").css({
        'margin-top': '5.2rem'
    })
})

$("#right-qr").click(function () {
    $("#right-qr").removeClass('col-md-8').addClass('col-md-4')
    $("#left-qr").removeClass('col-md-4').addClass('col-md-8')
    $(".form-login-qr").removeClass('col-md-10').addClass('col-md-7')
    $(".login-qr-right").css({
        'padding-left': '2%',
        'padding-right': '2%'
    })
    $(".form-login-qr form").css({
        'margin-top': '6rem'
    })
    $(".login-qr-right div").addClass('px-3')
})

// navbar
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll > 10) {
        $("#navbar-primary").addClass('navbar-gradient px-5 py-3 shadow')
    } else {
        $("#navbar-primary").removeClass('navbar-gradient px-5 py-3 shadow')
    }
})
// end navbar