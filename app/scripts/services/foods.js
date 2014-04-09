'use strict';

angular.module('dumplingApp')
  .factory('foods', function($resource) {
    return $resource('assets/foods.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  });
