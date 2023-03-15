$(function () {
	const $gnb = $('nav>.gnb');
	const $lnb = $('.lnb');
	const $bgLnb = $('.bg-lnb');

	if (window.innerWidth > 768) {
		$gnb.on('mouseenter', function () {
			$lnb.stop().slideDown();
			$bgLnb.stop().slideDown();
		});
		$gnb.on('mouseleave', function () {
			$lnb.stop().slideUp();
			$bgLnb.stop().slideUp();
		});
		$bgLnb.on('mouseenter', function () {
			$lnb.stop().slideDown();
			$bgLnb.stop().slideDown();
		});
		$bgLnb.on('mouseleave', function () {
			$lnb.stop().slideUp();
			$bgLnb.stop().slideUp();
		});
	}

	//모바일

	const $nav = $('nav');
	const $bgNav = $('.bg-nav');
	const $btnGnb = $('.btn-gnb');
	const $btnCls = $('.btn-cls');

	if (window.innerWidth <= 768) {
		$btnGnb.on('click', function () {
			$nav.stop().animate({ left: 0 });
			$bgNav.fadeIn();
		});

		$btnCls.on('click', function () {
			$nav.stop().animate({ left: '-90%' });
			$bgNav.fadeOut();
		});

		$bgNav.on('click', function (evt) {
			$nav.stop().animate({ left: '-90%' });
			$bgNav.fadeOut();
		});

		$gnb.children('li').on('click', function () {
			$(this).toggleClass('on').children('.lnb').slideToggle();
			$(this).siblings().removeClass('on').children('.lnb').slideUp();
			// $(this).children('li>a:after').animate({ rotate: 315, marginTop: 0 });
		});

		$(window).on('keyup', (evt) => {
			if (evt.key === 'Escape') {
				$nav.stop().animate({ left: '-90%' });
				$bgNav.fadeOut();
			}
		});

		//스와이핑
		let startPoint = 0;
		let endPoint = 0;

		//pc
		$(window).on('mousedown', function (evt) {
			startPoint = evt.pageX;
		});
		$(window).on('mouseup', (evt) => {
			endPoint = evt.pageX;
			//왼쪽으로 드래그
			if (startPoint - endPoint > 150) {
				$nav.stop().animate({ left: '-90%' });
				$bgNav.fadeOut();
				//오른쪽으로 드래그
			} else if (startPoint - endPoint < -150) {
				$nav.stop().animate({ left: 0 });
				$bgNav.fadeIn();
			}
		});

		//mobile touch
		$(window).on('touchstart', function (evt) {
			startPoint = evt.touches[0].pageX;
		});
		$(window).on('touchend', (evt) => {
			endPoint = evt.changedTouches[0].pageX;
			//왼쪽으로 드래그
			// if (startPoint > endPoint) {
			if (startPoint - endPoint > 150) {
				$nav.stop().animate({ left: '-90%' });
				$bgNav.fadeOut();
				//오른쪽으로 드래그
				// } else if (startPoint < endPoint) {
			} else if (startPoint - endPoint < -150) {
				$nav.stop().animate({ left: 0 });
				$bgNav.fadeIn();
			}
		});
	} //window.innerwidth<=768

	$(window).on('resize', () => {
		if (window.innerWidth > 768) {
			$gnb.on('mouseenter', function () {
				$lnb.stop().slideDown();
				$bgLnb.stop().slideDown();
			});
			$gnb.on('mouseleave', function () {
				$lnb.stop().slideUp();
				$bgLnb.stop().slideUp();
			});
			$bgLnb.on('mouseenter', function () {
				$lnb.stop().slideDown();
				$bgLnb.stop().slideDown();
			});
			$bgLnb.on('mouseleave', function () {
				$lnb.stop().slideUp();
				$bgLnb.stop().slideUp();
			});
		}
	});

	//사이즈 변경시 새로고침
	let bWidth = window.innerWidth;
	$(window).on('resize', () => {
		const nWidth = window.innerWidth;
		if ((bWidth < 768 && nWidth >= 768) || (bWidth > 767 && nWidth <= 767)) {
			location.reload();
		}
		bWidth = nWidth;
	});
});
