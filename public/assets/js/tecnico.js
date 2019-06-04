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

	$('#Volver').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		hideall();
		$('#Lista').attr("hidden", false);
	});

	$('#Try').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		addTable();
	});
	
	// $('.user-area> a').on('click', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$('.user-menu').parent().removeClass('open');
	// 	$('.user-menu').parent().toggleClass('open');
	// });

	function hideall() {
		$("div[ok='']").attr("hidden", true);
	}

	function plzwork() {
        $('a').click(function(event) {
            var id = $(this).attr('id');

            if (id == "C"){
				event.preventDefault();
				hideall();             
                $('#Crear').attr("hidden", false);
            }
            else if (id == "L"){
				event.preventDefault();
				hideall();             
                $('#Lista').attr("hidden", false);
			}
            else if (id == "closes"){  
                event.preventDefault();
                closes();
            }
        });
	}

	$('body').on('click','.ww',function() {
		alert("SI ENTRO");
		var id = $(this).parent().siblings(":first").text(); 
		hideall();
		$('#Info').attr("hidden", false);
		$('#tt').val(id);
	});

	function addTable() {
		var table = document.getElementById("TBody");
    
		var row = table.insertRow(-1);
		row.insertCell(0).innerHTML = "1";
		row.insertCell(1).innerHTML = "Leito";
		row.insertCell(2).innerHTML = "Conectado";
		row.insertCell(3).innerHTML = "<img src=\"images/info.png\" height=35 width=35 class=\"ww\"></img>";	
	}

    $( window ).on( "load", function() {
        plzwork();
    });
    

});