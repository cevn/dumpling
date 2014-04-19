'use strict';

angular.module('dumplingApp')
  .controller('MainCtrl', [ '$scope', 'jsonService', function ($scope, jsonService) {
      $scope.foods = jsonService.foods;
      $scope.selectedFood = '';
    }]);
