'use strict';

/**
 * @ngdoc function
 * @name helloIonicApp.controller:BannerCtrl
 * @description
 * # BannerCtrl
 * Controller of the helloIonicApp
 */
angular.module('yRestSeApp')
  .controller('BannerCtrl', function ($scope) {
    var imgs = $('.banner');
    var tl = new TimelineMax()
    tl
      .staggerFrom(imgs, 1,{display:'none', xPercent:-100})
      .staggerTo(imgs, 1,{y:"+=150"}, 0.5)
      .staggerTo(imgs, 1,{y:"0"}, 0.5)
      .staggerTo(imgs, 1,{xPercent:"0", css:{position:'absolute'}}, 0.5);
  });
