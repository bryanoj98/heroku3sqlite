
(function ($) {
    "use strict";
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');
    var username, passw;

    $('.login100-form-btn').on('click', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        if (check == true) {
            send_post();
        }

    });

    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function send_post() {
        $.ajax({
            url: 'holi',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ "userName": $('#user').val(), "password": $('#pass').val() }),
            processData: false,
            charset: 'utf-8',
            success: function (data, textStatus, jQxhr) {
                if (data != "admin") {
                    sessionStorage.setItem("user", $('#user').val());
                    sessionStorage.setItem("pass", $('#pass').val());
                    if (data == "tecnico")
                        $.redirect('/tecnico', { 'login': 'admin' });
                    else if (data == "comercial")
                        $.redirect('/comercial', { 'login': 'admin' });
                    else if (data == "cliente")
                        $.redirect('/cliente', { 'login': 'admin' });
                }
                else {
                    $.redirect('/admin', { 'login': 'admin' });
                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }

    function send_post1() {
        $.ajax({
            url: 'holi',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ "userName": username, "password": passw }),
            processData: false,
            charset: 'utf-8',
            success: function (data, textStatus, jQxhr) {
                if (data != "admin") {
                    sessionStorage.setItem("user", $('#user').val());
                    sessionStorage.setItem("pass", $('#pass').val());
                    if (data == "tecnico")
                        $.redirect('/tecnico', { 'login': 'admin' });
                    else if (data == "comercial")
                        $.redirect('/comercial', { 'login': 'admin' });
                    else if (data == "cliente")
                        $.redirect('/cliente', { 'login': 'admin' });
                }
                else {
                    $.redirect('/admin', { 'login': 'admin' });
                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }

    function validate(input) {
        if ($(input).val().trim() == '') {
            return false;
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    $(window).on("load", function () {
        if ("user" in localStorage) {
            username = localStorage.getItem("user");
            passw = localStorage.getItem("pass"); 
            send_post1();
        } 
    });

})(jQuery);