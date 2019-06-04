$.noConflict();

jQuery(document).ready(function ($) {

	"use strict";

	[].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
		new SelectFx(el);
	});

	jQuery('.selectpicker').selectpicker;


	$('#menuToggle').on('click', function (event) {
		$('body').toggleClass('open');
	});

	$('.search-trigger').on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
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
		$('a').click(function (event) {
			var id = $(this).attr('id');

			if (id == "G") {
				event.preventDefault();
				hideall();
				$('#Grafico').attr("hidden", false);
			}
			else if (id == "T") {
				event.preventDefault();
				hideall();
				$('#Tabla').attr("hidden", false);
			}
		});
	}

	var ctx = document.getElementById("pieChart");
	ctx.height = 100;
	var myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			datasets: [{
				data: [45, 25],
				backgroundColor: [
					"rgba(0, 123, 255, 0.8)",
					"rgba(255, 15, 0, 0.8)",
				],
				hoverBackgroundColor: [
					"rgba(0, 123, 255, 1)",
					"rgba(255, 15, 0, 1)",
				]

			}],
			labels: [
				"Clientes activos",
				"Clientes inactivos"
			]
		},
		options: {
			responsive: true
		}
	});

	$(window).on("load", function () {
		plzwork();
	});


});