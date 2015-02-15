'use strict';

angular.module('rand-page-js',
  ['ngAnimate', 'ngResource', 'ngRoute', 'ngMaterial', 'btford.markdown', 'angular-inview'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
