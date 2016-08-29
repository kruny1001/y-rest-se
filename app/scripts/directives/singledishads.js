'use strict';

/**
 * @ngdoc directive
 * @name helloIonicApp.directive:singleDishAds
 * @description
 * # singleDishAds
 */
angular.module('yRestSeApp')
  .directive('singleDishAds', function () {
    return {
      templateUrl: 'views/templates/singleDishAds.html',
      scope:{
        data : '='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });