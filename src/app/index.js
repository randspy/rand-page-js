'use strict';

angular.module('rand-page-js',
  ['ngAnimate', 'ngResource', 'ngRoute', 'btford.markdown', 'angular-inview'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/posts', {
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
