'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  	.module('portfolioApp', ['ngRoute', 'ngAnimate'])
  	.config(function ($routeProvider) {
    $routeProvider
      .when('/project/:name', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

