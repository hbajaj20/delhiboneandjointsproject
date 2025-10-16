(function($) {

	'use strict';

	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "992"
	}); 

	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Language Switcher
	$(".language-option").each(function() {
		var each = $(this)
		each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
		var allOptions = $(".language-dropdown-menu").children('a');
		each.find(".language-dropdown-menu").on("click", "a", function() {
			allOptions.removeClass('selected');
			$(this).addClass('selected');
			$(this).closest(".language-option").find(".lang-name").html($(this).text());
		});
	})

	// TweenMax JS 
	$('.banner-area').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.single-banner-slider-img, .banner-shape-1').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -1;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	}); 

	// banner-slider-one
	$('.banner-slider-one').owlCarousel({
		loop: true,
		margin: 30,
		nav: true, 
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
            '<i class="ri-arrow-left-s-line"></i>',   
            '<i class="ri-arrow-right-s-line"></i>',   
        ], 
		responsivee:{
			0:{
				items:1
			},
			520:{
				items:1
			},
			768:{
				items:1
			},
			992:{
				items:1
			},
			1200:{
				items:1
			},
		} 
	});

	// banner-slider-two
	$('.banner-two-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: false, 
		dots: true,
		animateOut: 'fadeOut',
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
            '<i class="ri-arrow-left-s-line"></i>',   
            '<i class="ri-arrow-right-s-line"></i>',   
        ], 
		responsivee:{
			0:{
				items:1
			},
			520:{
				items:1
			},
			768:{
				items:1
			},
			992:{
				items:1
			},
			1200:{
				items:1
			},
		} 
	});

	// banner-three-slider
	$('.banner-three-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: true, 
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
            '<i class="ri-arrow-left-s-line"></i>',   
            '<i class="ri-arrow-right-s-line"></i>',   
        ], 
		responsivee:{
			0:{
				items:1
			},
			520:{
				items:1
			},
			768:{
				items:1
			},
			992:{
				items:1
			},
			1200:{
				items:1
			},
		} 
	});

	// Gallery-slider
	$('.gallery-slider').owlCarousel({
		loop: true,
		margin: 20,
		nav: true, 
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
            '<i class="ri-arrow-left-s-line"></i>',   
            '<i class="ri-arrow-right-s-line"></i>',   
        ], 
		responsivee:{
			0:{
				items:1
			},
			520:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			},
		} 
	});

	// gallery-three-slider
	$('.gallery-three-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: true, 
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
            '<i class="ri-arrow-left-s-line"></i>',   
            '<i class="ri-arrow-right-s-line"></i>',   
        ], 
		responsivee:{
			0:{
				items:1
			},
			520:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			},
		} 
	});

	// blog-slider
	$('.blog-slider').owlCarousel({
		loop: true,
		margin: 15,
		nav: true, 
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
            '<i class="ri-arrow-left-s-line"></i>',   
            '<i class="ri-arrow-right-s-line"></i>',   
        ], 
		responsivee:{
			0:{
				items:1
			},
			520:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			},
		} 
	});

	// Testimonials-slider
	$('.testimonials-slider').owlCarousel({
		loop: true,
		margin: 5,
		nav: true, 
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 500,
		// autoplayHoverPause: true,
		// autoplay: true,
		// autoHeight:true,
		navText: [
            '<i class="ri-arrow-left-s-line"></i>',   
            '<i class="ri-arrow-right-s-line"></i>',   
        ], 
		responsivee:{
			0:{
				items:1
			},
			520:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			},
		} 
	});

	// Testimonials Two Slider
	$('.testimonials-two-slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: false, 
		dots: true,
		animateOut: 'fadeOut',
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
            '<i class="ri-arrow-left-s-line"></i>',   
            '<i class="ri-arrow-right-s-line"></i>',   
        ], 
		responsivee:{
			0:{
				items:1
			},
			520:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			},
		} 
	});

	// Testimonials Three Slider
	$('.testimonials-three-slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: false, 
		dots: true,
		animateOut: 'fadeOut',
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
            '<i class="ri-arrow-left-s-line"></i>',   
            '<i class="ri-arrow-right-s-line"></i>',   
        ], 
		responsivee:{
			0:{
				items:1
			},
			520:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:2
			},
			1200:{
				items:2
			},
		} 
	});

	// Modal Shop Details Slider
	$('.modal-shop-details-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: true, 
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		navText: [
            '<i class="ri-arrow-left-s-line"></i>',   
            '<i class="ri-arrow-right-s-line"></i>',   
        ], 
		responsivee:{
			0:{
				items:1
			},
			520:{
				items:1
			},
			768:{
				items:1
			},
			992:{
				items:1
			},
			1200:{
				items:1
			},
		} 
	});

	// Partner-logo-slider
	$('.partner-logo-slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: false, 
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		responsivee:{
			0:{
				items:2
			},
			520:{
				items:3
			},
			768:{
				items:4
			},
			992:{
				items:6
			},
			1200:{
				items:6
			},
		} 
	}); 

	// Odometer JS 
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});   

	// Sticky, Go To Top JS
	$(window).on('scroll', function() { 
		// Header Sticky JS 
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky"); 
		};
	});

	// Tabs JS
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});

	// FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class form Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	// Preloader
	jQuery(window).on('load', function() {
		$('.preloader').fadeOut();
	});

	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	}); 

	// Go to Top JS
	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event JS
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});

	// Popup Video
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({ 
		disableOn: 100,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	}); 

	// Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	}); 

	// Count Time JS
	function makeTimer() {
		var endTime = new Date("november  30, 2025 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	} 
	setInterval(function() { makeTimer(); }, 300); 

	//bar Filler
	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller();
	$('#bar4').barfiller();
	$('#bar5').barfiller();

	$('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");

})(jQuery);


// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('waga_theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('waga_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('waga_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();
