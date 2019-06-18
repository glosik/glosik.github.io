$(document).ready(function () {
	//Globals
	var resize = null,
		limitSm = 768,
		loadedSm = false,
		loadedXl = false,
		form = $('#main-contact-form'),
		btn = $('#top-menu a'),
		close = $('.box');



	// Activate button
//	btn.click(function (event) {
//		btn.removeClass('active');
//		$(this).addClass('active');
//	});
//	close.click(function (event) {
//		btn.removeClass('active');
//		$('#home').addClass('active');
//	});

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
		}
//		else {
//			$('#slider li').removeClass("fadein");
//		}
	});

}

// Screen sized reloading:
window.onload = loadXl();


});
