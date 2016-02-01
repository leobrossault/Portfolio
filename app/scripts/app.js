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
      .when('/', {
        templateUrl: 'views/loading.html',
        controller: 'LoadingCtrl'
      })
      .when('/project/:name', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
      })
      .otherwise({
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/loading', {
        templateUrl: 'views/loading.html',
        controller: 'LoadingCtrl'
      });
  })
  .run(function ($location) {
    // var prevPage = document.referrer;

    // if (prevPage.indexOf('localhost') <= -1) {
    //   $location.path('loading');
    // }
    $location.path('loading');
  });

