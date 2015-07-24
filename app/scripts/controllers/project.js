'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ProjectCtrl', function ($scope, $http, $routeParams) {

  	var project = $routeParams.name;
	$http.get('data.json').success(function(data) { 
    	for (var i = 0; i < data.projects.length; i ++) {
    		if (data.projects[i].url == project) {
    			$scope.numberProject = data.projects[i].number;
    			$scope.titleProject = data.projects[i].title;
    			$scope.dateProject = data.projects[i].year;
    			$scope.describeProject = data.projects[i].description;
    		}
    	}
    });
  });