'use strict';

/**
 * @ngdoc directive
 * @name helloIonicApp.directive:mainDishAds
 * @description
 * # mainDishAds
 */
angular.module('yRestSeApp')
  .directive('mainDishAds', function () {
    return {
      templateUrl: 'views/templates/main-dish-ads.html',
      scope:{
        data : '='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log(scope.data)
      }
    };
  });