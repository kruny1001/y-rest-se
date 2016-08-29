'use strict';

/**
 * @ngdoc overview
 * @name yRestSeApp
 * @description
 * # yRestSeApp
 *
 * Main module of the application.
 */
angular.module('yRestSeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    //'ngTouch',
    'ngMaterial',
    'firebase',
    'firebase.ref',
    'ngFileUpload',
    'cloudinary',
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.poster",
    "com.2fdevs.videogular.plugins.buffering",
    "info.vietnamcode.nampnq.videogular.plugins.youtube",
  ])
  .run(function($rootScope, $timeout, $firebaseArray){
      $rootScope.stateRoot = null;
      $rootScope.API = null;
      $rootScope.currentVideoRoot = Math.floor((Math.random() * 10));

      $rootScope.onPlayerReadyVideoRoot = function(API){
          $rootScope.API = API;
          $timeout(function(){$rootScope.API.setVolume(0); $rootScope.API.play()}, 2000);
      }

      $rootScope.onCompleteVideoRoot = function() {
          $rootScope.isCompletedRoot = true;
          $rootScope.currentVideoRoot++;
          if ($rootScope.currentVideoRoot >= $rootScope.videos.length) $rootScope.currentVideoRoot = 0;
          $rootScope.setVideoRoot($rootScope.currentVideoRoot);
      };

      $rootScope.videos = [];
      var videosRef = firebase.database().ref('videos');
      var videos = $firebaseArray(videosRef);
      videos.$loaded().then(function(val){
          val.forEach(function(src){
              $rootScope.videos.push({sources: [{src: src.$value}]})
          })

          $rootScope.configVideo = {
              preload: "none",
              sources: $rootScope.videos[0].sources,
              //theme: "lib/videogular-themes-default/videogular.css",
          };
      })

      //$rootScope.videos = [
      //    {sources: [{src: "https://www.youtube.com/watch?v=6gCFfhH3gFo"}]},
      //    {sources: [{src: "https://www.youtube.com/watch?v=A6DeV3osDNQ"}]},//입맛 없을 땐 한돈 소이 갈릭 삼겹살 덮밥
      //];

      $rootScope.setVideoRoot = function(index) {
          console.log(index);
          //$rootScope.API.stop();
          $rootScope.currentVideoRoot = index;
          $rootScope.configVideo.sources = $rootScope.videos[index].sources;


          $timeout($rootScope.API.play.bind($rootScope.API), 100);
      };


  });
