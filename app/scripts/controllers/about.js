'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('AboutCtrl', function ($scope) {
    var body = $('body');

	  setTimeout(function () {
      body.addClass('leave-home');
    }, 500);

  	if ($('.content-view').hasClass('about-page')) {
  		body.addClass('about');
  	}

  	if (body.hasClass('home')) {
      body.removeClass('home');
      body.removeClass('home-anim');
    }

    $('.contain-view').scroll(function () {
        var scrollY = $(this).scrollTop();
        
        if (scrollY != 0) {
          body.addClass('scroll');
        } else {
          body.removeClass('scroll');
        }
    });
  });
