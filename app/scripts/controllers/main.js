'use strict';

angular.module('dumplingApp')
  .controller('MainCtrl', [
      '$scope', 
      'jsonService', 
      'foods', 
      function ($scope, jsonService, foods) {
      $scope.foods = jsonService.foods;
      $scope.selectedFood = '';
    }]);
