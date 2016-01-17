'use strict';

angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams) {
  	$http.get('data.json').success(function(data) { 
    	$scope.projects = data.projects;
    });

    // Change button 'Say Hello'
    $('#btn-hello').attr('href', '#/contact');
    $('#btn-hello span').text('Say Hello');

    if ($('body').hasClass('contact')) {
      $('body').removeClass('contact');
    }

  	if ($('.content-view').hasClass('home-page')) {
  		$('body').addClass('home');
  	}
  });
