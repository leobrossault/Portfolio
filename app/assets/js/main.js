$('document').ready(function () {
	/* VAR */
	var hWindow = $('.content').height(),
		btnMenu = $('#btn-menu'),
		sections = $('section'),
		body = $('body'),
		project = 0,
		lastScrollTop = 0,
		maxH = 0,
		indexNav,
		initialOffset = 0,
		actualSection = 0,
		stateFirst = 1,
		stateSecond = 0,
		stateThird = 0,
		step = 1,
		distNav = 0,
		ratioTimeline = 0;

		/* ANIMS */
		var animMenu = new TimelineMax(),
			animLiMenu = new TimelineMax();

	/* EVENTS */
	btnMenu.on('click', showMenu);
	$('.contain-view').scroll(isInViewport);
	$('.contain-view').scroll(timeline);

	/* INITS */

	setTimeout(function () {
		if ($('.content-view').hasClass('project-page')) {
			initPage ();
		}
	}, 100);

	homePage ();
	
	/* FUNCTIONS */

	function homePage () {
		// setTimeout(function () {
		// 	if (!body.hasClass('launchAnim')) {
		// 		body.addClass('launchAnim');
		// 	}
		// }, 5000);

		// setTimeout(function () {
		// 	if (!body.hasClass('isLoad')) {
		// 		body.addClass('isLoad');
		// 	}
		// }, 6000);
	}

	function showMenu () {
		var menu = $('#menu'),
			liMenu = $('#menu li'),
			menuLink = $('#menu li a');

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

			setTimeout(function () {
				if ($('.content-view').hasClass('project-page')) {
					initPage ();
				}	
			}, 300);	
		});
	}

	function initPage () {
		sections.height(hWindow);

		// Init event in new page
		$('.chapter-nav').on('click', clickNav);

		// Init vars
		distNav = $('.chapter-nav:first-child + span + div').offset().top - $('.chapter-nav:first-child').offset().top;
		ratioTimeline = hWindow / distNav;

		if ($('.content-view').hasClass('project-page')) {
			project = 1;
			initialOffset = $('.change-projects').offset().top;
		}

		$('.contain-view').scroll(function (event) {
		    var scrollY = $(this).scrollTop();
		    
		    if (scrollY != 0) {
		    	body.addClass('scroll');
		    } else {
		    	body.removeClass('scroll');
		    }
		});
	}

	function isInViewport () {
		var scrollTop = $(window).scrollTop(), 
			viewportHeight = $(window).height();

        $('.isNot').each(function () {
        	var top = $(this).offset().top;

        	if(scrollTop + viewportHeight >= top ) {
        		$(this).removeClass('isNot');
        		$(this).addClass('isIt');
        	}
        });
	}

	function clickNav () {
		if (!$(this).hasClass('active')) {
			$('.chapter-nav').removeClass('active');
			$(this).addClass('active');
		}
	}

	function timeline () {
		$('.section, #screen-anchor').each(function () {
			var $this = $(this);

			if ($this.attr('id') == 'info-project') {
				if ($this.offset().top < 0) {
					stateSecond = 1;
				} else {
					stateSecond = 0;
				}
			}

			if ($this.attr('id') == 'screen-anchor') {
				if ($this.offset().top < 0) {
					stateThird = 1;
				} else {
					stateThird = 0;
				}
			}
		});

		$('.chapter-nav').removeClass('active');

		if (stateThird == 1) {
			step = 3;
			$('.chapter-nav:last-child').addClass('active');
		} else if (stateSecond == 1) {
			step = 2;
			$('.chapter-nav:first-child + span + div').addClass('active');
		} else {
			step = 1;
			$('.chapter-nav:first-child').addClass('active');
		}

		drawTimeline ();
	}

	function drawTimeline () {
		var nav = $('.chapter-nav:first-child + span'),
			distSection;

		if ($('#home-project').length > 0) {
			if ($('#home-project').offset().top < 0) {
				if (step == 1) {
					distSection = hWindow - (hWindow + $('#home-project').offset().top);
					if (distSection / ratioTimeline < 25) {
						nav.css({'max-height': (distSection / ratioTimeline)});
					} else {
						nav.css({'max-height': '25px'});
					}

					$('.chapter-nav:first-child + span + div + span').css({
						'max-height': 0
					});
				} else if (step == 2) {
					nav = $('.chapter-nav:first-child + span + div + span');
					distSection = hWindow - (hWindow + $('#info-project').offset().top);
					if (distSection / ratioTimeline < 25) {
						nav.css({'max-height': (distSection / ratioTimeline)});
					} else {
						nav.css({'max-height': '25px'});
					}
				} else {
					$('.chapter-nav:first-child + span').css({
						'max-height': '24.5px'
					});

					$('.chapter-nav:first-child + span + div + span').css({
						'max-height': '24.5px'
					});
				}
			} else {
				nav.css({'max-height': 0});
			}
		}
	}
});