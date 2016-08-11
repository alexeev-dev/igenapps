$(document).ready(function() {
	// HOME scroll down button
	$('.scroll-down').click(function() {
		$('html').velocity('scroll', {offset: $('.example-section').offset().top + 1, duration: 1500, easing: 'easeInOut', mobileHA: false});
		return false;
	});

	// HOME Navigation (Navbar)
	if (window.location.hash != '') {
		var el = $(window.location.hash);
		if (el.length) {
			$(window).scrollTop(el.offset().top - $('header').height());
		}
	}
	$('a[href*=#]:not(a[href=#], a[data-toggle="tab"], a[data-toggle="collapse"])').click(function () {
		var el = $($(this).attr('href'));
		if (el.length) {
			var headerHeight;
			if (el.offset().top > $(window).scrollTop()) {
				headerHeight = 0;
			} else {
				headerHeight = $('header').height();
			}
			$('html').velocity('scroll', {offset: el.offset().top - headerHeight, duration: 1000, easing: 'easeOutExpo', mobileHA: false});
			return false;
		}
		return false;
	});

	// Toggle Mobile Navigation (Navbar)
	var $navToggle = $('.nav-toggle', '.navbar');
	$navToggle.on('click', function(){
		$(this).toggleClass('active').parents('.navbar').find('.mobile-dropdown').toggleClass('expanded');
	});

	// Dropdown section (Navbar)
	var $jsDropdownI = $('.js-dropdown > i'),
	$jsDropdown = $('.js-dropdown');
	$jsDropdownI.on('click', function(){
		$(this).parent().toggleClass('active').find('.dropdown').toggleClass('expanded');
	});
	$jsDropdown.on('click', function(e) {
		e.stopPropagation();
	});
	$(document).on('click', function(e) {
		$jsDropdown.removeClass('active').find('.dropdown').removeClass('expanded');
	});

	// HOME Bullets for example-section
	$('.slide-indicator a').click(function() {
		if ($(this).hasClass('active')) {
			return false;
		}
		var i = $('.slide-indicator a').index($(this));
		$('html').velocity('scroll', {offset: $('.slide-wrapper').eq(i).offset().top + 1, duration: 1000, easing: 'easeOutExpo', mobileHA: false});
		return false;
	});

	// HOME Video Popup
	var $videoBtn = $( '.video-popup-btn' );
	if( $videoBtn.length > 0 ) {
		$videoBtn.magnificPopup( {
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 500,
			gallery: {
				enabled: false
			}
		} );
	}
	
	// HOME Mobile-carousel in phone-slider-section
	if ($('.mobile-carousel').length) {
		$('.mobile-carousel').lemmonSlider({
			infinite: true
		});
		setInterval(function sliderAutoplay() {
			$('.mobile-carousel').trigger('nextSlide');
		}, 3000);
	}

	// HOME Phone Carousel in phone-slider-section
	var $phoneCarousel = $( '.phone-carousel .inner' );
	if ( $phoneCarousel.length > 0 ) {
		$phoneCarousel.each( function () {

			var dataLoop 	 = $( this ).parents( '.phone-carousel' ).data( 'loop' ),
			autoPlay   = $( this ).parents( '.phone-carousel' ).data( 'autoplay' ),
			timeOut    = $( this ).parents( '.phone-carousel' ).data( 'interval' );

			$( this ).owlCarousel( {
				items: 1,
				loop: dataLoop,
				margin: 1,
				nav: false,
				dots: true,
				navText: [ , ],
				autoplay: autoPlay,
				autoplayTimeout: timeOut
			} );
		} );
	}
	
	// HOME Price tabs
	var isAnimBusy = false;
	$('.switcher p').click(function() {
		if (isAnimBusy || $(this).hasClass('active')) {
			return false;
		}
		isAnimBusy = true;
		
		var i = $('.switcher p').index($(this));
		$('.switcher p').removeClass('active');
		$(this).addClass('active');
		
		$('.switch-slider').css('left', $(this).position().left);
		$('.switch-slider').css('width', $(this).outerWidth());
		
		var curEl = $('.table_tab_body.active');
		curEl.addClass('animated').addClass(curEl.data('out'));
		curEl.removeClass('active');
		
		curEl.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			curEl.removeClass(curEl.data('out')).removeClass('animated');
			curEl.hide();
			
			var newEl = $('.table_tab_body').eq(i);
			newEl.show();
			newEl.addClass('active animated').addClass(curEl.data('in'));
			newEl.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				newEl.removeClass(curEl.data('in')).removeClass('animated');
				isAnimBusy = false;
			});
		});
	});
	
	// HOME Testimonals
	$('.avatars a').click(function() {
		if (isAnimBusy || $(this).hasClass('active')) {
			return false;
		}
		isAnimBusy = true;
		
		var i = $('.avatars a').index($(this));
		$('.avatars a').removeClass('active');
		$(this).addClass('active');
		
		var curEl = $('.quotes .slide.active');
		curEl.addClass('animated').addClass(curEl.data('out'));
		curEl.removeClass('active');
		
		curEl.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			curEl.removeClass(curEl.data('out')).removeClass('animated');
			curEl.hide();
		});

		var newEl = $('.quotes .slide').eq(i);
		newEl.addClass('active');
		newEl.show();
		newEl.addClass('animated').addClass(curEl.data('in'));
		newEl.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			newEl.removeClass(curEl.data('in')).removeClass('animated');
			isAnimBusy = false;
		});
		
		return false;
	});

	// HOME Media Carousel
	var $testimonCarousel = $( '.media-carousel .inner' );
	if ($testimonCarousel.length > 0 ) {
		$testimonCarousel.each( function () {

			var dataLoop 	 = $( this ).parent().data( 'loop' ),
			autoPlay   = $( this ).parent().data( 'autoplay' ),
			timeOut    = $( this ).parent().data( 'interval' );

			$( this ).owlCarousel( {
				items: 5,
				loop: dataLoop,
				margin: 15,
				nav: false,
				dots: true,
				navText: [ , ],
				autoplay: autoPlay,
				autoplayTimeout: timeOut,
				autoHeight: false,
				responsive:{
					320:{
						slideBy: 1,
						items:1
					},
					479:{
						slideBy: 2,
						items:2
					},
					768:{
						slideBy: 2,
						items:2
					},
					980:{
						slideBy: 4,
						items:4
					},
					1199:{
						slideBy: 6,
						items:6
					}
				}
			} );
		} );
	}
	
	// HOME Form validation 
	$('.js-validate-home').feelform({
		notificationType: 'class',
		preventDefaultSubmit: true,
		onSubmit: function(el) {
			sendAjax(el.data('formid'), el, '');
			$('.download-button').click();
		},			
		clearAfterSubmit: false		
	});

	// Validation for all forms
	$('.js-validate').feelform({
		notificationType: 'class',
		preventDefaultSubmit: true,
		onSubmit: function(el) {
			sendAjax(el.data('formid'), el, '');
		},			
		clearAfterSubmit: false		
	});

	// Animate CSS
	$.fn.extend({
		animateCss: function (animationName) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			$(this).addClass('animated ' + animationName).one(animationEnd, function() {
				$(this).removeClass('animated ' + animationName);
			});
		}
	});

	// same height blocks
	var windowHeight = $(window).innerHeight();
	$('.js-getHeight').css('height', windowHeight);

	// Animate CSS – buttons
	$('.js-getApp').on('click',function(){
		$('.intro-section form .col-sm-9').css('opacity','1');
		$('.intro-section form').css('transform','translateX(0)');

		// ЭТО НУЖНО БУДЕТ ОТРЕФАКТОРИТЬ
		$('.js-getApp').addClass('animated zoomOut').delay(600).queue(function () { $(this).css('display','none'); $(this).dequeue();});
		$('.js-sendLink').delay(600).addClass('animated zoomIn').queue(function () { $(this).css('display','block'); $(this).dequeue();});

		return false; // !!!!!!!!!!!!!!!! DELETE IT!
	});

	// ЭТО НУЖНО БУДЕТ ОТРЕФАКТОРИТЬ
	$('.js-sendLink').on('click', function(){
		$('.intro-section form').addClass('animated zoomOut').delay(750).queue(function () { $(this).css('display','none'); $(this).dequeue();});
		$('.js-hideRow').delay(750).queue(function () { $(this).addClass('animated fadeInBottom').css('display','block'); $(this).dequeue();});
		$('.js-hideRow p').delay(1000).queue(function () { $(this).textillate(); $(this).dequeue();});
	});

	// js download button intro section
	// $('.js-download-btn').on('click', function(){
	// 	$('.intro-section form').delay(300).queue(function () { $(this).css('display','block').animateCss('fadeInLeft'); $(this).dequeue();});
	// });

	// Tooltips
	var $tooltip = $('[data-toggle="tooltip"]');
	if ($tooltip.length > 0 ) {
		$tooltip.tooltip();
	}

	// Custom checkboxes and radios
	var $checkbox = $('input[type="checkbox"], input[type="radio"]');
	if ($checkbox.length) {
		$('input').iCheck();
	}

	// Post sharing
	var $postShareBtn = $('.post-share-btn > a'),
	$postShareToggle = $('.post-share-btn > a > i');
	$postShareToggle.on('click', function(){
		$(this).parents('.post-share-btn').toggleClass('active');
		return false;
	});
	$(document).on('click', function(e) {
		$postShareBtn.parent().removeClass('active');
	});

});


// WINDOW-LOAD functions
$(window).on('load', function() {
	$('html, body').animate({scrollTop: 0}, 1);
	
	// HOME typed words in phone-slider-section
	if ($('.rw-words').length) {
		$('.rw-words span').typed({
			strings: ['Event', 'Wedding', 'Shop', 'Business', 'Restaurant', 'Church'],
			typeSpeed: 50,
			backDelay: 2000,
			loop: true
		});
	}

	// HOME Phone Screens Parallax
	var $layerParallax = $('.layer-parallax');
	if (!Modernizr.touch) {
		if ( $layerParallax.length > 0 ) {
			$layerParallax.parallax();
		}
	}

	// HOME animation WOW
	new WOW().init();

	// BLOG Isotope Grid
	var $grid = $('.isotope-masonry-grid, .isotope-grid');
	if($grid.length > 0) {
		$grid.isotope({
			itemSelector: '.grid-item',
			transitionDuration: '0.7s',
			masonry: {
				columnWidth: '.grid-sizer',
				gutter: '.gutter-sizer'
			}
		});
	}

});

// WINDOW-RESIZE functions
$(window).resize(function() {
	var windowHeight = $(window).innerHeight();
	$('.video-wrap').css('min-height', windowHeight);
	$('.slide1, .slide-wrapper').css('height', windowHeight);

	// same height blocks
	$('.js-getHeight').css('height', windowHeight);

}).resize();


// WINDOW-SCROLLING functions
$.fn.reverse = [].reverse;
var lastScrollTop = 0;
var isBulletsVisible = false;
$(window).on('scroll', function(){
	
	// Navbar shows when scrolling
	var st = $(window).scrollTop();
	if (st > lastScrollTop){
		// downscroll
		setTimeout(function() {
			$('.navbar').removeClass('active');
		}, 400);
	} else {
		// upscroll
		setTimeout(function() {
			$('.navbar').addClass('active');
		}, 400);
	}
	lastScrollTop = st;

	// HOME Navbar active menu
	$('.menu li').removeClass('current-menu-item');
	$('.menu li a').reverse().each(function() {
		var el = $($(this).attr('href'));
		if (el.length && el.offset().top < $(window).scrollTop() + $('header').height() + 10) {
			$(this).parent().addClass('current-menu-item');
			return false;
		}
	});
	
	// HOME example-section
	var totalSlides = $('.slide-wrapper').length;
	if (totalSlides > 0) {
		var lastOffset = $('.slide-wrapper:last').offset().top;
		
		$('.slide-wrapper').each(function(i) {
			var isLast = (i == (totalSlides - 1));
			
			if (st > $(this).offset().top && st < lastOffset) {
				if (!isLast) {
					$(this).find('.slide1').css({'position': 'fixed', 'top': 0, 'left': 0});
				}
			} else {
				$(this).find('.slide1').css('position', 'relative');
			}
			
			if (st > $(this).offset().top && st < lastOffset + 200) {
				setActiveBullet(i);
			}
		});
		
		if (st > $('.slide-wrapper:first').offset().top && st < lastOffset + 200) {
			if (!isBulletsVisible) {
				showBullets();
			}
		} else if (isBulletsVisible) {
			removeBullets();
		}
	}

}).scroll();

// go back for inner pages
function goBack() {
	window.history.back()
}

// bullets for example-section
function setActiveBullet(i) {
	$('.slide-indicator a').removeClass('active');
	$('.slide-indicator a').eq(i).addClass('active');
}
function showBullets() {
	isBulletsVisible = true;
	var si = $('.slide-indicator');
	si.show();
	si.addClass('animated').addClass(si.data('in'));
	si.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		si.removeClass('animated').removeClass(si.data('out')).removeClass(si.data('in'));
	});
}
function removeBullets() {
	isBulletsVisible = false;
	var si = $('.slide-indicator');
	si.addClass('animated').addClass(si.data('out'));
	si.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		si.removeClass('animated').removeClass(si.data('out')).removeClass(si.data('in'));
		si.hide();
	});
}

// SEND E-MAIN
var isBusy = false, idHolder = -1, formHolder = $();
function sendAjax(id, form, customData) {
	if (!isBusy && id != '') {
		isBusy = true;
		setTimeout(function() {
			isBusy = false;
		}, 1000);

		idHolder = id;
		formHolder = form;
		
		var dataStr = 'id=' + id + customData;
		if (form.length != '') {
			dataStr += ('&' + form.serialize());
		}		
		$.ajax({
			type: 'post',
			url: 'mailer/ajaxHandler.php',
			data: dataStr,
			cache: false,
			success: function(result) {
				if (result != -1 && result != '') {
					if (formHolder.length > 0) {
						formHolder.find('input:not(input[type="hidden"]), textarea, select').val('');
						var curparent = formHolder.parent();
						formHolder.remove();
						curparent.append('<div class="alert alert-success">' + formHolder.data('thank') +'</div>');
					}
				} else {
					alert('ajax error');
				}
			}
		});
	}	
}