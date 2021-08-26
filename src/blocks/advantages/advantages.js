import WOW from 'wow.js';

(() => {

	let wow = new WOW(
		{
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true,
		}
	);

	wow.init();
})();