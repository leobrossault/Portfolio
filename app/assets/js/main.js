$('document').ready(function () {
	/* VAR */
	var hWindow = $('.content').height();
	var btnMenu = $('#btn-menu');
	var sections = $('section');

		/* ANIMS */
		var animMenu = new TimelineMax();
		var animLiMenu = new TimelineMax();

	/* EVENTS */
	btnMenu.on('click', showMenu);

	/* INITS */
	initPage ();


	/* FUNCTIONS */
	function showMenu () {
		var menu = $('#menu');
		var liMenu = $('#menu li');
		var menuLink = $('#menu li a');

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).addClass('disactive');
		} else {
			$(this).removeClass('disactive');
			$(this).addClass('active');
		}

		if (menu.hasClass('active')) {
			var count = 0;
			animLiMenu.staggerFromTo(liMenu, 0.5, {y: 0, alpha: 1}, {y: -20, alpha: 0, ease: Power4.easeInOut, onComplete: function () {
				count ++;
				if (count == liMenu.length) {
					menu.removeClass('active');
				}			
			}}, 0.2);
		} else {
			menu.addClass('active');
			animLiMenu.staggerFromTo(liMenu, 0.5, {y: -20, alpha: 0}, {y: 0, alpha: 1, ease: Power4.easeInOut}, 0.2);
		}

		menuLink.click(function () {
			menu.removeClass('active');
			btnMenu.removeClass('active');
			btnMenu.addClass('disactive');
			initPage ();
		});
	}

	function initPage () {
		sections.height(hWindow);
		// console.log(sections);
	}
});