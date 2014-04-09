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
  })
  .factory('foods', function($resource) {
    return $resource('assets/foods.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  })
  .service('jsonService', function(foods) {
    return {
      foods: foods.query()
    };
  });
