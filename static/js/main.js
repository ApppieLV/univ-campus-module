$(document).ready(function () {
    $('#signIn_button, #footer_signIn_button').click(function () {
        $('#modal_signUp_button').parent().removeClass('active')
        $('#modal_signIn_button').parent().addClass('active')
        $('.signUp-form').removeClass('active')
        $('.signIn-form').addClass('active')
    })
    $('#signUp_button, #action_signUp_button').click(function () {
        $('#modal_signIn_button').parent().removeClass('active')
        $('#modal_signUp_button').parent().addClass('active')
        $('.signIn-form').removeClass('active')
        $('.signUp-form').addClass('active')
    })
    $('#modal_signIn_button').click(function () {
        $(this).parent().addClass('active')
        $('#modal_signUp_button').parent().removeClass('active')
        $('.signUp-form').removeClass('active')
        $('.signIn-form').addClass('active')
    })
    $('#modal_signUp_button').click(function () {
        $(this).parent().addClass('active')
        $('#modal_signIn_button').parent().removeClass('active')
        $('.signIn-form').removeClass('active')
        $('.signUp-form').addClass('active')
    })
    $("#signUp_phone").mask("+38(099)-99-99-999");

    $('#signUp_enrollee_ticket').mask("aa№99999999");

    function toggleSignInModalInputs() {
        let flag = true;
        let signIn_ticket = $('#signIn_enrollee_ticket-form')
        signIn_ticket.remove()
        $('.signIn_enrollee_switch').click(function () {
            $('')
            flag = !flag;
            if (flag == true) {
                signIn_ticket.remove()
            } else {
                $('.signIn-form').find('form').find('button').before(signIn_ticket)
                $('#signIn_enrollee_ticket').mask("aa№99999999");
            }
        })
    }

    function toggleSignUpModalInputs() {
        let flag = true;
        let signUp_ticket = $('.signUp_enrollee_forms')
        signUp_ticket.remove()
        $('.signUp_enrollee_switch').click(function () {
            $('')
            flag = !flag;
            if (flag == true) {
                signUp_ticket.remove()
            } else {
                $('.signUp-form').find('form').find('#signUp_pwd').parent().parent().parent().before(signUp_ticket)
                $('#signUp_enrollee_ticket').mask("aa№99999999");
            }
        })
    }
    toggleSignInModalInputs()
    toggleSignUpModalInputs()

    $('.activity-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#detail-activity-prev'),
        nextArrow: $('#detail-activity-next'),
    })
    $('.detail-gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('#detail-galler-prev'),
        nextArrow: $('#detail-galler-next'),
    })

})