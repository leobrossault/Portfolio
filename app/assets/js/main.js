$('document').ready(function () {
	/* VAR */
	var btnMenu = $('#btn-menu');

		/* ANIMS */
		var animMenu = new TimelineMax();
		var animLiMenu = new TimelineMax();

	/* EVENTS */
	btnMenu.on('click', showMenu);


	/* FUNCTIONS */
	function showMenu () {
		var menu = $('#menu');
		var liMenu = $('#menu li');

		if (menu.hasClass('active')) {
			console.log('active');
			animLiMenu.staggerFromTo(liMenu, 0.5, {y: 0, alpha: 1}, {y: -20, alpha: 0, ease: Power4.easeInOut}, 0.2);
			animMenu.fromTo(menu, 0.5, {y: 0, alpha: 1}, {y: -500, alpha: 0, ease: Power4.easeInOut, onComplete: function () {
				animLiMenu.set(liMenu, {clearProps:"all"});
				animMenu.set(menu, {clearProps:"all"});
				menu.removeClass('active');
			}}, 1.5);
		} else {
			animMenu.fromTo(menu, 0.5, {y: -500, alpha: 0}, {y: 0, alpha: 1, ease: Power4.easeInOut}, 0);
			animLiMenu.staggerFromTo(liMenu, 0.5, {y: -20, alpha: 0}, {y: 0, alpha: 1, ease: Power4.easeInOut}, 0.2);
			menu.addClass('active');
		}
	}
});