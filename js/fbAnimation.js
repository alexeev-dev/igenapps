$(document).ready(function() {
	// bPopup
	$('.js-bPopup').on('click', function(){
		$('.facebook-login-popup').bPopup({
			autoClose: 1000
		});
	});

	// Textillate
	$('.js-doIt').hover(function(){
		$('.block1 .signature i').addClass('animated zoomIn').css('opacity','1');
		$('.block1-tlt1').textillate();
	});
	$('.js-doIt').on('click',function(){
		$('.header-tlt1').addClass('animated zoomOut').delay(1750).queue(function () { $(this).css('display','none'); $(this).dequeue();});
		$('.header-tlt2').delay(4250).queue(function () { $(this).textillate({in:{effect: 'bounceIn', sync:true}}).css('display','block'); $(this).dequeue();});
		$('.block1').addClass('animated fadeOutDown').delay(1750).queue(function () { $(this).css('display','none'); $(this).dequeue();});
		$('.block2').delay(1750).addClass('animated fadeInDown').queue(function () { $(this).css('display','block'); $(this).dequeue();});
		$('.block2 .leftLine').delay(2750).queue(function () { $(this).css('left','-84px'); $(this).dequeue();});
		$('.block2 .rightLine').delay(2750).queue(function () { $(this).css('right','-84px'); $(this).dequeue();});
		$('.block2 .devider p').delay(2750).queue(function () { $(this).addClass('animated zoomIn').css('opacity','1'); $(this).dequeue();});
		$('.block2 .signature').delay(4250).queue(function () {$(this).css('display','block'); $(this).dequeue();});
		$('.block2 .block2-tlt2').delay(4250).queue(function () { $(this).textillate(); $(this).dequeue();});
		$('.block2 .signature i').delay(4250).queue(function () {$(this).addClass('animated zoomIn').css('opacity','1'); $(this).dequeue();});
		$('.block2 .devider').delay(2250).queue(function () {$(this).addClass('animated fadeInDown').css('opacity','1'); $(this).dequeue();});
		$('.block2 .edit').delay(2750).queue(function () {$(this).addClass('animated fadeInDown').css('opacity','1'); $(this).dequeue();});
		$('.block2 .fbSig').delay(3250).queue(function () {$(this).addClass('animated fadeInDown').css('opacity','1'); $(this).dequeue();});
		$('.block2 .fbTitle').delay(3750).queue(function () {$(this).addClass('animated fadeInDown').css('opacity','1'); $(this).dequeue();});
	});
	$('.js-tlt1').focus(function(){
		$('.block2 .sig1 i').addClass('animated zoomIn').css('opacity','1');
		$('.block2-tlt1').textillate({
			delay: 20
		});
	});
	$('.js-tlt2').focus(function(){
		$('.block2 .sig1 i').addClass('animated zoomOut').css('opacity','0');
		$('.block2 .sig1').addClass('animated fadeOut').delay(500).queue(function () { $(this).css('display', 'none'); $(this).dequeue();});
		$('.block2-tlt1').addClass('animated zoomOut');
		$('.block2 .sig2').delay(750).queue(function () {$(this).css('display','block'); $(this).dequeue();});
		$('.block2 .sig2 i').delay(750).queue(function () {$(this).addClass('animated zoomIn').css('opacity','1'); $(this).dequeue();});
		$('.block2 .block2-tlt2').delay(750).queue(function () { $(this).textillate(); $(this).dequeue();});
	});
	$('.js-tlt2').blur(function(){
		$('.header-tlt2').addClass('animated zoomOut').delay(750).queue(function () { $(this).css('display','none'); $(this).dequeue();});
		$('.block2').addClass('animated fadeOutDown').delay(750).queue(function () { $(this).css('display','none'); $(this).dequeue();});
		$('.block3').delay(750).queue(function () { $(this).css('display','block'); $(this).dequeue();});
		$('.block3 .left').delay(750).addClass('animated fadeInLeft');
		$('.block3 .right').delay(750).addClass('animated fadeInRight');
		$('.block3-tlt1').delay(750).queue(function () { $(this).textillate(); $(this).dequeue();});
		$('.block3 .signature i').delay(750).queue(function () { $(this).addClass('animated zoomIn').css('opacity','1'); $(this).dequeue();});
	});
	$('.block2 .js-goRight').on('click',function(){
		$('.block2').removeClass('animated fadeOutRight fadeOutLeft').addClass('animated fadeOutLeft').css('position','absolute').delay(750).queue(function () { $(this).css('display','block'); $(this).dequeue();});
		$('.block4').removeClass('animated fadeOutRight').addClass('animated fadeInRight').css({'display':'block', 'position':'relative'});
		$('.header-tlt2').removeClass('animated fadeOutRight fadeInRight fadeOutLeft fadeInLeft').addClass('animated fadeOutLeft').css('position', 'absolute').delay(750).queue(function () { $(this).css('display','none'); $(this).dequeue();});
		$('.header-tlt4').removeClass('animated fadeOutRight fadeInRight fadeOutLeft fadeInLeft').addClass('animated fadeInRight').queue(function () { $(this).css({'display':'block','position':'relative'}); $(this).dequeue();});;
		$('.block4-tlt1').delay(750).queue(function () { $(this).textillate(); $(this).dequeue();});
		$('.block4 .signature i').delay(750).queue(function () { $(this).addClass('animated zoomIn').css('opacity','1'); $(this).dequeue();});
	});
	$('.js-goBackLeft').on('click',function(){
		$('.block4').removeClass('animated fadeInRight').addClass('animated fadeOutRight').css('position','absolute').delay(750).queue(function () { $(this).css('display','block'); $(this).dequeue();});
		$('.block2').removeClass('animated fadeOutLeft fadeOutRight fadeInRight fadeInLeft').addClass('animated fadeInLeft').delay(750).queue(function () { $(this).css({'display':'block', 'position':'relative'}); $(this).dequeue();});
		$('.header-tlt4').removeClass('animated fadeOutRight fadeInRight fadeOutLeft fadeInLeft').addClass('animated fadeOutRight').css('position', 'absolute').delay(750).queue(function () { $(this).css('display','none'); $(this).dequeue();});
		$('.header-tlt2').removeClass('animated fadeOutRight fadeInRight fadeOutLeft fadeInLeft').addClass('animated fadeInLeft').queue(function () { $(this).css({'display':'block','position':'relative'}); $(this).dequeue();});;
	});
	$('.js-continue').on('click', function(){
		$('.header-tlt2').addClass('animated zoomOut').delay(750).queue(function () { $(this).css('display','none'); $(this).dequeue();});
		$('.header-tlt3').delay(2750).queue(function () { $(this).textillate({in:{effect: 'bounceIn', sync:true}}).css('display','block'); $(this).dequeue();});
		$('.block2').removeClass('animated fadeOutLeft fadeOutRight fadeInRight fadeInLeft fadeInDown').addClass('animated fadeOutDown').delay(750).queue(function () { $(this).css('display','none'); $(this).dequeue();});
		$('.block3').delay(750).addClass('animated fadeInDown').queue(function () { $(this).css('display','block'); $(this).dequeue();});
		$('.block3-style2 .leftLine').delay(1750).queue(function () { $(this).css('left','-84px'); $(this).dequeue();});
		$('.block3-style2 .rightLine').delay(1750).queue(function () { $(this).css('right','-84px'); $(this).dequeue();});
		$('.block3-style2 .devider p').delay(1750).queue(function () { $(this).addClass('animated zoomIn').css('opacity','1'); $(this).dequeue();});
		$('.block3-style2 .signature').delay(2750).queue(function () {$(this).css('display','block'); $(this).dequeue();});
		$('.block3-style2 .block3-tlt1').delay(2750).queue(function () { $(this).textillate(); $(this).dequeue();});
		$('.block3-style2 .signature i').delay(2750).queue(function () {$(this).addClass('animated zoomIn').css('opacity','1'); $(this).dequeue();});
		$('.block3-style2 .devider').delay(1250).queue(function () {$(this).addClass('animated fadeInDown').css('opacity','1'); $(this).dequeue();});
		$('.block3-style2 .rightBtn').delay(1750).queue(function () {$(this).addClass('animated fadeInDown').css('opacity','1'); $(this).dequeue();});
		$('.block3-style2 .js-fadeIn-block3').delay(2250).queue(function () {$(this).addClass('animated fadeInDown').css('opacity','1'); $(this).dequeue();});
		$('.block3-style1 .leftLine').delay(2000).queue(function () { $(this).css('left','-84px'); $(this).dequeue();});
		$('.block3-style1 .rightLine').delay(2000).queue(function () { $(this).css('right','-84px'); $(this).dequeue();});
		$('.block3-style1 .devider p').delay(2000).queue(function () { $(this).addClass('animated zoomIn').css('opacity','1'); $(this).dequeue();});
		$('.block3-style1 .signature').delay(2500).queue(function () {$(this).css('display','block'); $(this).dequeue();});
		$('.block3-style1 .block3-tlt1').delay(2500).queue(function () { $(this).textillate(); $(this).dequeue();});
		$('.block3-style1 .signature i').delay(2500).queue(function () {$(this).addClass('animated zoomIn').css('opacity','1'); $(this).dequeue();});
		$('.block3-style1 .devider').delay(1500).queue(function () {$(this).addClass('animated fadeInDown').css('opacity','1'); $(this).dequeue();});
		$('.block3-style1 .leftBtn').delay(1500).queue(function () {$(this).addClass('animated fadeInLeft').css('opacity','1'); $(this).dequeue();});
		$('.block3-style1 .rightBtn').delay(1500).queue(function () {$(this).addClass('animated fadeInRight').css('opacity','1'); $(this).dequeue();});
		$('.block3-style1 .js-fadeIn-block3').delay(2000).queue(function () {$(this).addClass('animated fadeInDown').css('opacity','1'); $(this).dequeue();});
	});
	$('.js-goLeft').on('click',function(){
		$('.block3').removeClass('animated fadeOutRight fadeOutLeft').addClass('animated fadeOutRight').css('position','absolute').delay(750).queue(function () { $(this).css('display','block'); $(this).dequeue();});
		$('.block5').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft').css({'display':'block', 'position':'relative'});
		$('.block5-tlt1').delay(750).queue(function () { $(this).textillate(); $(this).dequeue();});
		$('.block5 .signature i').delay(750).queue(function () { $(this).addClass('animated zoomIn').css('opacity','1'); $(this).dequeue();});
		$('.header-tlt3').removeClass('animated fadeOutRight fadeInRight fadeOutLeft fadeInLeft').addClass('animated fadeOutRight').queue(function () { $(this).css('position', 'absolute'); $(this).dequeue();});;
		$('.header-tlt5').removeClass('animated fadeOutRight fadeInRight fadeOutLeft fadeInLeft').addClass('animated fadeInLeft').queue(function () { $(this).css({'display':'block','position':'relative'}); $(this).dequeue();});;
	});
	$('.js-goBackRight').on('click',function(){
		$('.block5').removeClass('animated fadeInLeft').addClass('animated fadeOutLeft').css('position','absolute').delay(750).queue(function () { $(this).css('display','block'); $(this).dequeue();});
		$('.block3').removeClass('animated fadeOutLeft fadeOutRight fadeInRight fadeInLeft').addClass('animated fadeInRight').delay(750).queue(function () { $(this).css({'display':'block', 'position':'relative'}); $(this).dequeue();});
		$('.header-tlt5').removeClass('animated fadeOutRight fadeInRight fadeOutLeft fadeInLeft').addClass('animated fadeOutLeft').queue(function () { $(this).css('position', 'absolute'); $(this).dequeue();});;
		$('.header-tlt3').removeClass('animated fadeOutRight fadeInRight fadeOutLeft fadeInLeft').addClass('animated fadeInRight').delay(750).queue(function () { $(this).css('position','relative'); $(this).dequeue();});;
	});
	// $('.js-goRight').on('click',function(){
	// 	$('.block2').removeClass('animated fadeOutRight fadeOutLeft').addClass('animated fadeOutLeft').css('position','absolute').delay(750).queue(function () { $(this).css('display','block'); $(this).dequeue();});
	// 	$('.block4').removeClass('animated fadeOutRight').addClass('animated fadeInRight').css({'display':'block', 'position':'relative'});
	// 	$('.block4-tlt1').delay(750).queue(function () { $(this).textillate(); $(this).dequeue();});
	// 	$('.block4 .signature i').delay(750).queue(function () { $(this).addClass('animated zoomIn').css('opacity','1'); $(this).dequeue();});
	// });
	$('.js-goBackLeft').on('click',function(){
		$('.block4').removeClass('animated fadeInRight').addClass('animated fadeOutRight').css('position','absolute').delay(750).queue(function () { $(this).css('display','block'); $(this).dequeue();});
		$('.block2').removeClass('animated fadeOutLeft fadeOutRight fadeInRight fadeInLeft').addClass('animated fadeInLeft').delay(750).queue(function () { $(this).css({'display':'block', 'position':'relative'}); $(this).dequeue();});
	});
});