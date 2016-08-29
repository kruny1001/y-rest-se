'use strict';

/**
 * @ngdoc directive
 * @name helloIonicApp.directive:rightMenuBar
 * @description
 * # rightMenuBar
 */
angular.module('yRestSeApp')
  .directive('rightMenuBar', function () {
    return {
      templateUrl: 'views/templates/rightMenuBar.html',
      scope:{
        data:"="
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });