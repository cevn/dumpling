'use strict';

angular
  .module('dumplingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'mgcrea.ngStrap',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
