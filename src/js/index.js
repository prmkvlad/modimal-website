import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 3,
	loop: true,
	spaceBetween: 24,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();
