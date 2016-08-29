'use strict';

/**
 * @ngdoc directive
 * @name helloIonicApp.directive:3dBox
 * @description
 * # 3dBox
 */
angular.module('yRestSeApp')
  .directive('boxSpin', function () {
    return {
      templateUrl: 'views/templates/3d-box.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });