'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.returnData
 * @description
 * # returnData
 * Factory in the portfolioApp.
 */
angular.module('portfolioApp')
  .factory('returnData', function ($http) {
    return $http.get('data.json');
  });
