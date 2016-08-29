'use strict';

/**
 * @ngdoc service
 * @name helloIonicApp.videoService
 * @description
 * # videoService
 * Factory in the helloIonicApp.
 */
angular.module('yRestSeApp')
  .factory('VideoService', function ($sce, $timeout) {
    var handonResource = function(lang){}
    var state = null;
    var API = null;
    var currentVideo = 0;
    var isCompleted = true;

    var onPlayerReady = function(API){
      var API = API;
      $timeout(function(){API.play()}, 2000);
    }

    var onCompleteVideo = function() {
      var isCompleted = true;
      currentVideo++;
      if (currentVideo >= videos.length) currentVideo = 0;
      setVideo(currentVideo);
    };

    var videos = [
      {sources: [{src: "https://www.youtube.com/watch?v=6gCFfhH3gFo"}]},
      {sources: [{src: "https://www.youtube.com/watch?v=A6DeV3osDNQ"}]},//입맛 없을 땐 한돈 소이 갈릭 삼겹살 덮밥
    ];

    var setVideo = function(index) {
      API.stop();
      currentVideo = index;
      config.sources = $scope.videos[index].sources;
      $timeout(API.play.bind(API), 100);
    };

    var config = {
      preload: "none",
      sources: $scope.videos[0].sources,
      theme: "lib/videogular-themes-default/videogular.css",
    };

    return {

    }
  });