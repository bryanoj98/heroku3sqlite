$.noConflict();

jQuery(document).ready(function($) {

	"use strict";

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
		new SelectFx(el);
	} );

	jQuery('.selectpicker').selectpicker;


	$('#menuToggle').on('click', function(event) {
		$('body').toggleClass('open');
	});

	$('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});

	$('#Act').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		hideall();
		enviarUser();		
	});

	$('#EnvioDel').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$.ajax({
            url: 'admin/update',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ "userName":$('#userAct').val() }),
            processData: false,
            charset: 'utf-8',
            success: function (data, textStatus, jQxhr) {
				alert("El usuario ha sido eliminado");
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
	});
	
	$('#EnvioAct').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$.ajax({
            url: 'admin/update',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ "userName":$('#userAct').val(), "password": $('#pass_crear').val(), "role": $('#rol_crear').val() }),
            processData: false,
            charset: 'utf-8',
            success: function (data, textStatus, jQxhr) {
				alert("El usuario ha sido actualizado");
				hideall();
				$('#Actualizar').attr("hidden", false);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
	});

	$('#enviarCrear').on('click', function(event) {
		$.ajax({
            url: 'admin/crear',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ "userName": $('#user_crear').val(), "state": "Desconectado", "password": $('#pass_crear').val(), "role": $('#rol_crear').val() }),
            processData: false,
            charset: 'utf-8',
            success: function (data, textStatus, jQxhr) {
                alert("El usuario ha sido creado");
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
	});	

	function enviarUser() {
		$.ajax({
            url: 'admin/read-one',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ "userName": $('#input1-act').val() }),
            processData: false,
            charset: 'utf-8',
            success: function (data, textStatus, jQxhr) {
				$('#Actualizar1').attr("hidden", false);
				$('#userAct').val(data.userName);
				$('#passAct').val(data.userName);
				$('#selectAct').val(data.userName);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
	}

	function LeerBD() {
		$.ajax({
            url: 'admin/leer',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({  }),
            processData: false,
            charset: 'utf-8',
            success: function (data, textStatus, jQxhr) {
				var markup = "";
				var info, j;
				//$("table").find("tr:gt(0)").remove();
				$.each(data, function(ok, val) {
					j = 0;
					info = [];
					$.each(val, function(k, v){
						info[j] = v;
						j += 1;
					});
					markup = "<tr><th scope=\"row\">" + info[0] +"</th><td>" + info[1] + "</td><td>" + info[4] + "</td><td>" + info[2] + "</td></tr>";
					//console.log(markup);
					$("table tbody").append(markup);
				});
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
	}

	// $('.user-area> a').on('click', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$('.user-menu').parent().removeClass('open');
	// 	$('.user-menu').parent().toggleClass('open');
	// });

	function hideall() {
		$("div[ok='']").attr("hidden", true);
	}

	function logout() {
		$.ajax({
            url: 'login/remove',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ "userName": localStorage.getItem("user") }),
            processData: false,
            charset: 'utf-8',
            success: function (data, textStatus, jQxhr) {
				localStorage.removeItem("user");
				localStorage.removeItem("pass");
				$.redirect('/login', { 'login': 'admin' });
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
	}

	function plzwork() {
        $('a').click(function(event) {
            var id = $(this).attr('id');

            if (id == "C"){
				event.preventDefault();
				hideall();             
                $('#Crear').attr("hidden", false);
            }
            else if (id == "R"){
				event.preventDefault();
				hideall();             
				$('#Leer').attr("hidden", false);
				LeerBD();
			}
			else if (id == "U"){
				event.preventDefault();
				hideall();             
                $('#Actualizar').attr("hidden", false);
			} 
			else if (id == "D"){
				event.preventDefault();
				hideall();             
                $('#Eliminar').attr("hidden", false);
			}
			else if (id == "P"){
				event.preventDefault();
				hideall();             
                $('#Parametros').attr("hidden", false);
			}
            else if (id == "logout"){  
                event.preventDefault();
                logout();
            }
        });
    }

    $( window ).on( "load", function() {
        plzwork();
    });
    

});