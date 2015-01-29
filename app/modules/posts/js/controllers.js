'use strict';

/**
 * @ngdoc function
 * @name myThingsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myThingsApp
 */
angular.module('myThingsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
