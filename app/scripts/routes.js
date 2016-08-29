'use strict';
/**
 * @ngdoc overview
 * @name yRestSeApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('yRestSeApp')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .when('/comments', {
        templateUrl: 'views/comments.html',
        controller: 'CommentsCtrl'
      })
      .when('/banner', {
        templateUrl: 'views/banner.html',
        controller: 'BannerCtrl'
      })
      .when('/pixi-test', {
        templateUrl: 'views/pixi-test.html',
        controller: 'PixiTestCtrl'
      })
      .otherwise({redirectTo: '/'});
  }])
  .config(function (cloudinaryProvider,$routeProvider) {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCP0K-yeJQGybW_gbScofM7bpCD1bleA1s",
      authDomain: "y-rest-se.firebaseapp.com",
      databaseURL: "https://y-rest-se.firebaseio.com",
      storageBucket: "y-rest-se.appspot.com",
    };
    firebase.initializeApp(config);
    //   cloudinary setting
    cloudinaryProvider
      .set("cloud_name", "dbfirebase")
      .set("upload_preset", "hb1c23iq");
  });
