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

    $scope.pageClass = 'page-project';

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
          $scope.prevProject = data.projects[i].prev;
          $scope.nextProject = data.projects[i].next;
          $scope.video = data.projects[i].video;
    		}
    	}
    });

    if ($('body').hasClass('home')) {
      $('body').removeClass('home');
      $('body').removeClass('home-anim');
    } else if ($('body').hasClass('contact')) {
      $('body').removeClass('contact');
    } else if ($('body').hasClass('about')) {
      $('body').removeClass('about');
    }

    setTimeout(function () {
      $('body').addClass('leave-home');
    }, 500);

    // Change button 'Say Hello'
    var btnHello = $('#btn-hello');
    btnHello.attr('href', '#/contact');
    btnHello.find($('span')).text('Say Hello');
    btnHello.click(function () {
      $('project-page').addClass('leave');
    });

    if ($('.content-view').hasClass('project-page')) {
      $('.contain-view').scroll(function (event) {
          var scrollY = $(this).scrollTop();
          
          if (scrollY != 0) {
            $('body').addClass('scroll');
          } else {
            $('body').removeClass('scroll');
          }
      });
    }

    $scope.prev = function() {
      $('.contain-view').scrollTop(0);
    }

    $scope.next = function() {
      $('.contain-view').scrollTop(0);
    }

    $scope.nav = function (e, i) {
      var wHeight = window.innerHeight;
      $('.contain-view').animate({scrollTop :i * wHeight}, 500);
    }
  });