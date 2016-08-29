'use strict';

/**
 * @ngdoc function
 * @name yRestSeApp.controller:MainCtrl
 * @description
 * # MainCtrl

 Main view controll data

 */
angular.module('yRestSeApp')
  .controller('MainCtrl', function ($scope, $window, $rootScope, $timeout, $firebaseArray, $location) {

    var resetAnimation = function(){
      TweenLite.set('.rightMenu', {xPercent:"0"});
      TweenLite.set('.mainMenu', {yPercent:"120"});
      TweenLite.set('#whole2', {yPercent:"120"});
    }

    var masterTimeLine = new TimelineMax({repeat:-1});
    //Get menu item from Firebase
    var menuRef = firebase.database().ref('menus');
    $scope.menus = $firebaseArray(menuRef)

    $timeout(function(){
      $scope.menus.forEach(function(val){
        val.show = true;
      })
      $scope.meats = _.filter($scope.menus, function(o) { return o.type==='meat'; });
      $scope.singles = _.filter($scope.menus, function(o) { return o.type==='single'; });
      resetAnimation();
      TweenLite.set('.targetMenu', {autoAlpha:0});
      var ani1 = animation1();
      var ani2 = animation2();
      var ani3 = animation3();
      masterTimeLine
        .add(ani1)
        .add(ani2)
        .add(ani3)
      masterTimeLine.play();
    }, 3000);

    var animation1 = function() {
      var tl = new TimelineMax()
      $scope.menus.forEach(function(val, index){
        tl
        .set('.rightMenu', {xPercent:"0"})
        .set('.mainMenu', {yPercent:"120"})
        .set('#whole2', {yPercent:"120"})
        .set('.targetMenu', {autoAlpha:0})
        .set('#menu-'+index, {display:'block'})
        tl.to('#menu-'+index, 1, {autoAlpha:1})
        tl.to('#menu-'+index, 1, {autoAlpha:0, delay:1})
        tl.set('#menu-'+index, {display:'none'})
      })
      return tl;
    }
    var animation2 = function() {
      var tl = new TimelineMax()
        //.set('.rightMenu', {xPercent:"0"})
        .to('.rightMenu', 0.6, {xPercent:"120"})
        .set('#whole2', {yPercent:"120", display:"block"})
        .to('#whole2', 0.6, {yPercent:"0"})
        .to('#whole2', 0.6, {yPercent:"120", delay:5.6})
        //.to('.rightMenu', 0.6, {xPercent:"0"})
      return tl;
    }
    // Animation 3
    /*
      Def: Animation 3
      Init: set rightMenu xPercent 0 all other menu should be percent + 100
      Process:
      ScrollTo
      Fade Out
    */
    var animation3 = function() {
      var tl = new TimelineMax()
        //.set('.rightMenu', {xPercent:"0"})
        //.to($('.menuList'), 3, {scrollTo:{y:$("#menu-1"), offsetY:0}})
        .to('.rightMenu', 0.6, {xPercent:"120"})
        .set('#whole1', {yPercent:"120", display:"block"})
        .to('#whole1', 0.6, {yPercent:"0"})
        .to('#whole1', 0.6, {yPercent:"120", delay:5.6})
        .to('.rightMenu', 0.6, {xPercent:"0"})

      return tl;
    }

    $scope.goTo = function(path){
      $location.path(path);
    }

    //Debuging Tools
    $scope.animation1 = function(){
      masterTimeLine.stop();
      var tl = new TimelineMax()
      $scope.menus.forEach(function(val, index){
        tl
          .set('.rightMenu', {xPercent:"0"})
          .set('.mainMenu', {yPercent:"120"})
          .set('#whole1', {yPercent:"120"})
          .set('#whole2', {yPercent:"120"})
          .set('.targetMenu', {autoAlpha:0})
          .set('#menu-'+index, {display:'block'})

        tl.to('#menu-'+index, 1, {autoAlpha:1})
        tl.to('#menu-'+index, 1, {autoAlpha:0, delay:1})
        tl.set('#menu-'+index, {display:'none'})
      })
    }

    $scope.animation3 = function(){
      masterTimeLine.stop();
      var tl = new TimelineMax()
      .set('.rightMenu', {xPercent:"0"})
        .set('#whole1', {yPercent:"120"})
        .set('#whole2', {yPercent:"120"})
      //.to($('.menuList'), 3, {scrollTo:{y:$("#menu-1"), offsetY:0}})
        .set('.rightMenu', {xPercent:"120"})
        .set('#whole1', {yPercent:"120", display:"block"})
        .to('#whole1', 0.6, {yPercent:"0"})
        //.to('#whole1', 0.6, {yPercent:"120", delay:5.6})
        //.to('.rightMenu', 0.6, {xPercent:"0"})
    }

    $scope.animation2 = function(){
      masterTimeLine.stop();
      var tl = new TimelineMax()
      //.set('.rightMenu', {xPercent:"0"})
      .set('#whole1', {yPercent:"120"})
      .set('#whole2', {yPercent:"120"})
      .set('.rightMenu', {xPercent:"120"})
        .set('#whole2', {yPercent:"120", display:"block"})
        .to('#whole2', 0.6, {yPercent:"0"})
        //.to('#whole2', 0.6, {yPercent:"120", delay:5.6})
      //.to('.rightMenu', 0.6, {xPercent:"0"})
    }


    $scope.reload = function(){
      $window.location.reload();

    }
  });
