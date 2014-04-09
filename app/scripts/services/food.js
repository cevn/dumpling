'use strict';

angular.module('dumplingApp')
  .factory('food', function($resource, foodId) {
    return $resource('assets/foods.json',
      {id: foodId}, {
        query: {
          method: 'GET',
          isArray: false
        }
      });
  });

