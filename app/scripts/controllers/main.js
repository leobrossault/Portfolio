'use strict';

angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams) {
  	$http.get('data.json').success(function(data) { 
    	$scope.projects = data.projects;
    });

    $scope.pageClass = 'page-home';

    // Change button 'Say Hello'
    $('#btn-hello').attr('href', '#/contact');
    $('#btn-hello span').text('Say Hello');

    setTimeout(function () {
      $('body').addClass('home-anim');
    }, 500);

    // $('body').removeClass('leave-home');

    if ($('body').hasClass('contact')) {
      $('body').removeClass('contact');
    } else if ($('body').hasClass('about')) {
      $('body').removeClass('about');
    }

  	if ($('.content-view').hasClass('home-page')) {
  		$('body').addClass('home');
  	}
  });
