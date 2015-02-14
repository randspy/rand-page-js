'use strict';

angular.module('rand-page-js', ['ngAnimate', 'ngResource', 'ngRoute', 'ngMaterial'])
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
