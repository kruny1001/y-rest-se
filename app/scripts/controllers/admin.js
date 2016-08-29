'use strict';

/**
 * @ngdoc function
 * @name helloIonicApp.controller:AdminCtrl
 * @description

 # AdminCtrl
 Controller of the helloIonicApp

 1. Manage Images
 2. Manage menu details
 3. Update menu descirption by users
 4. Sercurity Purposer add login module
 5. Payment module to extend proper

 */

angular.module('yRestSeApp')
  .controller('AdminCtrl', function ($scope, $sce, $location, $firebaseArray) {

    $scope.targetMenu = null;
    $scope.setTargetMenu = function(target){
      $scope.targetMenu = target;
    }
    $scope.updateMenu = function(target){
      $scope.menus.$save(target);
    }
    $scope.docId="y-rest-se";
    var photoRef = firebase.database().ref('menus/'+$scope.docId+'/photos');
    $scope.photos = $firebaseArray(photoRef);

    var menuRef = firebase.database().ref('menus');
    $scope.menus = $firebaseArray(menuRef);
    $scope.menus.$loaded().then(function(val){
      console.log(val)
      //meat
      $scope.meats = _.filter(val, function(o){ return o.type=='meat'})
      //single
      $scope.singles = _.filter(val, function(o){ return o.type=='single'})
    })
    $scope.dish = {
        name:'돼지양념갈비',
        name_cn:'调味猪排烧烤',
        name_jp:'テジ・ヤンニョム・カルビ/味付け豚カルビ',
        name_en:'Marinated Pork Ribs',
        img: 'dImages/a1.png',
      options:[{desc:'2인분 2人 Two   people (640g)',   price:'￦26,000'}, {desc:'3인분 3人 Three people (960g)',   price:'￦39,000'}, {desc:'4인분 4人 Four  people (1280g)',  price:'￦52,000'}],
      type:'meat'
    };

    var videosRef = firebase.database().ref('videos');
    $scope.videos = $firebaseArray(videosRef);
    $scope.newVidTool = false;
    $scope.addVid = function(){
      $scope.newVidTool = true;
    }
    //"https://www.youtube.com/watch?v=6gCFfhH3gFo\"
    //"https://www.youtube.com/watch?v=A6DeV3osDNQ"
    $scope.addNewVid = function(vidSrc){
      $scope.videos.$add(vidSrc);
    }

    $scope.goTo = function(path){
      $location.path(path);
    }


    //Video Setting

    $scope.currentTime = 0;
    $scope.totalTime = 0;
    $scope.state = null;
    $scope.volume = 1;
    $scope.isCompleted = false;
    $scope.ADMINAPI = null;

    $scope.onPlayerReady = function (API) {
      alert('ready')
      $scope.ADMINAPI = API;
    };

    $scope.onCompleteVideo = function () {
      $scope.isCompleted = true;
    };

    $scope.onUpdateState = function (state) {
      $scope.state = state;
    };

    $scope.onUpdateTime = function (currentTime, totalTime) {
      $scope.currentTime = currentTime;
      $scope.totalTime = totalTime;
    };

    $scope.onUpdateVolume = function (newVol) {
      $scope.volume = newVol;
    };

    $scope.testvideos = [
      {
        sources: [
          {src: "https://www.youtube.com/watch?v=ELbwD21-r3k"}
        ]
        // Tracks are inside .mpd file and added by Dash.js
      }
    ];

    $scope.config = {
      autoHide: false,
      autoHideTime: 3000,
      autoPlay: false,
      sources: $scope.testvideos[0].sources,
      tracks: $scope.testvideos[0].tracks,
      loop: false,
      preload: "auto",
      transclude: true,
      controls: undefined,
      theme: {
        //url: "styles/themes/default/videogular.css"
      },
      plugins: {
        poster: {
          url: "assets/images/videogular.png"
        },
        //ads: {
        //  companion: "companionAd",
        //  companionSize: [728, 90],
        //  network: "6062",
        //  unitPath: "iab_vast_samples",
        //  adTagUrl: "http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F3510761%2FadRulesSampleTags&ciu_szs=160x600%2C300x250%2C728x90&cust_params=adrule%3Dpremidpostpodandbumpers&impl=s&gdfp_req=1&env=vp&ad_rule=1&vid=47570401&cmsid=481&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]",
        //  skipButton: "<div class='skipButton'>skip ad</div>"
        //}
      }
    };

    $scope.changeSource = function () {
      $scope.config.sources = $scope.testvideos[1].sources;
      $scope.config.tracks = undefined;
      $scope.config.loop = false;
      $scope.config.preload = true;
    };


  });
