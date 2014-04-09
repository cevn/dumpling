'use strict';

angular.module('dumplingApp')
  .service('jsonService', function(foods) {
    return {
      foods: foods.query()
    };
  });
