$(document).ready(function() {

	// 回到顶部
	$('#topcontrol').click(function (event) {
		$('html,body').animate({scrollTop: 0}, 1000);
	});

	// 获得主导航栏偏移位置和实际高度
	var navPos = $('.nav-wrap').offset().top;
	var navHeight = $('.nav-wrap').height();

	//滚动监听
	$(window).scroll(function (event) {

		var sTop = $(window).scrollTop();

		// 只有滚动条超过100px才有必要显示回到顶部按钮
		if (sTop >= 100) {
			$('#topcontrol').fadeIn('slow');
		} else {
			$('#topcontrol').fadeOut('slow');
		}

		//当滚动条超过导航条位置，导航条fixed
		if (sTop >= navPos) {
			if (!$('.nav-wrap').hasClass('fixed')) {
				$('.nav-wrap').addClass('fixed');
				$('.banner').css('margin-bottom', navHeight);
			}
		} else {
			if ($('.nav-wrap').hasClass('fixed')) {
				$('.nav-wrap').removeClass('fixed');
				$('.banner').css('margin-bottom', '0px');
			}
		}
	})
});