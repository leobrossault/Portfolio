'use strict';

angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams) {
  	$http.get('data.json').success(function(data) { 
    	$scope.projects = data.projects;
    });

	if ($('.content-view').hasClass('home-page')) {
		$('body').addClass('home');
	}
  });
