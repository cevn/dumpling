'use strict';

angular.module('dumplingApp')
  .service('jsonService', ['foods', function(foods) {
    return {
      foods: foods.query()
    };
  }]);
