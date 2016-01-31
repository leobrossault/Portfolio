'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:LoadingCtrl
 * @description
 * # LoadingCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('LoadingCtrl', function ($scope, $location) {
  	setTimeout(function () {
      $scope.$apply(function () {
        $('body').addClass('isLoad');
        $location.path('home');
      });
    }, 5000);
  });
