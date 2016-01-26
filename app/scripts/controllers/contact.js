'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ContactCtrl', function ($scope, $http) {
  	$scope.pageClass = 'page-contact';

  	setTimeout(function () {
      $('body').addClass('leave-home');
    }, 500);

  	if ($('.content-view').hasClass('contact-page')) {
  		$('body').addClass('contact');
  	}

  	if ($('body').hasClass('home')) {
      $('body').removeClass('home');
      $('body').removeClass('home-anim');
    } else if ($('body').hasClass('about')) {
      $('body').removeClass('about');
    }

  	// Change button 'Say Hello'
  	$('#btn-hello').attr('href', '#/');
  	$('#btn-hello span').text('Home');

  	// Get focus
  	$('input, textarea').focus(function () {
  		var parent = $(this).parent().closest('div'),
  			allParent = $('form > div');

  		allParent.removeClass('focus');

  		allParent.each(function () {
  			var input = $('input, textarea');
  			if ($(this).find(input) && $(this).find(input).val() != '') {
  				$(this).addClass('filled');
  			} else {
  				$(this).removeClass('filled');
  			}
  		});

  		parent.addClass('focus');
  	});

    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.errorForm = false;

    $scope.submit = function(contactform) {
    	var contactPage = $('.contact-page');

    	contactPage.removeClass('form-success');
    	contactPage.removeClass('form-error-server');
    	contactPage.removeClass('form-all-fields');

        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'scripts/services/contact.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                if (data.success) { //success comes from the return json object
 					contactPage.addClass('form-success');
                } else {
                	contactPage.addClass('form-error-server');
                }
            });
        } else {
            $scope.errorForm = false;
            contactPage.addClass('form-all-fields');
        }
    }
  });
