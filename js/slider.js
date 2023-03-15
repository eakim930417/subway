//bx slider
$(function () {
	$('.slider').bxSlider({
		auto: true,
		autoHover: true,
		speed: 500,
		pause: 3000,
		controls: false,
		infiniteLoop: true,
		touchEnabled: false
	});
});

//swiper
$(function () {
	const $classic = $('.menu-category>.classic');
	const $fresh = $('.menu-category>.fresh');
	const $premium = $('.menu-category>.premium');
	const $breakfast = $('.menu-category>.breakfast');

	const $subCategory = $('.menu-category>a');
	const $slideItem = $('.swiper-slide');

	// const $btnPrev = $('.swiper-button-prev');
	// const $btnNext = $('.swiper-button-next');

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 30,

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar'
		}
	});

	const slideIdx = [5, 13, 21, 29];

	// function moveClassic() {
	// 	swiper.slideTo(5, 500, false);
	// }
	// function moveFresh() {
	// 	swiper.slideTo(13, 500, false);
	// }
	function moveFn(idx) {
		swiper.slideTo(slideIdx[idx], 300, false);
	}

	$subCategory.on('click', function (evt) {
		evt.preventDefault();
		$(this).addClass('on').siblings().removeClass('on');
		moveFn($($subCategory).index(this));
	});

	swiper.on('transitionEnd', function () {
		// console.log('now index :::', swiper.realIndex);

		if (swiper.realIndex < 8) {
			$classic.addClass('on').siblings().removeClass('on');
		} else if (swiper.realIndex < 16) {
			$fresh.addClass('on').siblings().removeClass('on');
		} else if (swiper.realIndex < 24) {
			$premium.addClass('on').siblings().removeClass('on');
		} else {
			$breakfast.addClass('on').siblings().removeClass('on');
		}
	});

	$slideItem.on('mouseenter', function () {
		$(this)
			.stop()
			.animate({ backgroundSize: 110 + '%', backgroundPosition: 'center center' });
	});
	$slideItem.on('mouseleave', function () {
		$(this)
			.stop()
			.animate({ backgroundSize: 100 + '%', backgroundPosition: 'center center' });
	});
});
