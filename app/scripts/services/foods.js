'use strict';

angular.module('dumplingApp')
  .factory('foods', ['$resource', function($resource) {
    return $resource('assets/foods.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  }]);
