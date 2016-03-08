$(document).ready(function(){
	
	// 回到顶部
	$('#topcontrol').click(function(event) {
		$('html,body').animate({scrollTop:0}, 1000);
	});

	// 获得主导航栏偏移位置和实际高度
	var navPos = $('.nav-wrap').offset().top;	
	var navHeight = $('.nav-wrap').height();
	
	//滚动监听
	$(window).scroll(function(event) {

		var sTop = $(window).scrollTop();

		// 只有滚动条超过100px才有必要显示回到顶部按钮
		if (sTop >= 100) {
			$('#topcontrol').fadeIn('slow');
		} else {
			$('#topcontrol').fadeOut('slow');
		}

		//当滚动条超过导航条位置，导航条fixed
		if ( sTop >= navPos ) {
			if (!$('.nav-wrap').hasClass('fixed')) {
				$('.nav-wrap').addClass('fixed');
				$('.banner').css('margin-bottom',navHeight);
			}
		} else {
			if ($('.nav-wrap').hasClass('fixed')) {
				$('.nav-wrap').removeClass('fixed');
				$('.banner').css('margin-bottom','0px');
			}
		}

		/*滚动监听导航高亮*/
		var intro = {
			offsetTop:$('#post-intro').offset().top,
			height:$('#post-intro').outerHeight()
		}

		var usage = {
			offsetTop:$('#post-usage').offset().top,
			height:$('#post-usage').outerHeight()
		}

		var choiceness = {
			offsetTop:$('#choiceness').offset().top,
			height:$('#choiceness').outerHeight()
		}

		if (sTop + navHeight >= intro.offsetTop && sTop + navHeight <= intro.offsetTop + intro.height) {
			if (!$('.intro').hasClass('hover'))
				$('.intro').addClass('hover');
		} else {
			$('.intro').removeClass('hover');
		}

		if (sTop + navHeight >= usage.offsetTop && sTop + navHeight <= usage.offsetTop + usage.height) {
			if (!$('.usage').hasClass('hover'))
				$('.usage').addClass('hover');
		} else {
			$('.usage').removeClass('hover');
		}

		if (sTop + navHeight >= choiceness.offsetTop && sTop + navHeight <= choiceness.offsetTop + choiceness.height) {
			if (!$('.choice').hasClass('hover'))
				$('.choice').addClass('hover');
		} else {
			$('.choice').removeClass('hover');
		}

	});

	//锚点链接过渡
	$('.nav-wrap a').click(function(event) {

		var offsetTop = $(this.hash).offset().top - navHeight + 7; //获得锚点目标的偏移量

		$('html,body').animate({scrollTop:offsetTop}, 700);

		return false; //只要是链接当按钮一定要阻止默认行为
	});

});