'use strict';

angular.module('dumplingApp')
  .controller('MainCtrl', function ($scope, jsonService, foods) {
      $scope.foods = jsonService.foods;
    });
