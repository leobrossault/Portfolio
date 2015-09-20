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
          $scope.urlProject = data.projects[i].url;
    			$scope.numberProject = data.projects[i].number;
    			$scope.titleProject = data.projects[i].title;
    			$scope.yearProject = data.projects[i].year;
          $scope.monthProject = data.projects[i].month;
    			$scope.describeProject = data.projects[i].description;
          $scope.longDescribeProject = data.projects[i].longDescription;
          $scope.roleProject = data.projects[i].role;
          $scope.clientProject = data.projects[i].client;
          $scope.screensProject = data.projects[i].sections;
          $scope.navProject = data.projects[i];
    		}
    	}
    });
  });