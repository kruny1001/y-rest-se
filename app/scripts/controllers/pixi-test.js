'use strict';

/**
 * @ngdoc function
 * @name helloIonicApp.controller:PixiTestCtrl
 * @description
 * # PixiTestCtrl
 * Controller of the helloIonicApp
 */
angular.module('yRestSeApp')
  .controller('PixiTestCtrl', function ($scope) {

    var renderer = PIXI.autoDetectRenderer(800, 600,{ transparent: true });
    document.body.appendChild(renderer.view);

    // create the root of the scene graph
    var stage = new PIXI.Container();

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage('dImages/bunny.png');

    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    for (var i = 0; i < 100; i++)
    {
      createBunny(Math.floor(Math.random() * 800) , Math.floor(Math.random() * 600));
    }

    $scope.reset = function(){
      stage.children.forEach(function(v){
        v.position.x = 0;
        v.position.y = 0;
      })
    }
    $scope.reposition = function(){
      stage.children.forEach(function(v){
        v.x += Math.floor(Math.random() * 3);
        v.y+= Math.floor(Math.random() * 2);
      })
    }

    function createBunny(x, y){
      var bunny = new PIXI.Sprite(texture);
      // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
      bunny.interactive = true;

      // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
      bunny.buttonMode = true;

      // center the bunny's anchor point
      bunny.anchor.set(0.5);

      // make it a bit bigger, so it's easier to grab
      bunny.scale.set(1);

      // setup events
      bunny
      // events for drag start
        .on('mousedown', onDragStart)
        .on('touchstart', onDragStart)
        // events for drag end
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
        // events for drag move
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove);

      // move the sprite to its designated position
      bunny.position.x = x;
      bunny.position.y = y;

      // add it to the stage
      stage.addChild(bunny);
    }

    // start animating
    animate();


    function animate() {
      //console.log(1);
      requestAnimationFrame(animate);
      // just for fun, let's rotate mr rabbit a little
      $scope.reposition();
      // render the container
      renderer.render(stage);


    }

    function onDragStart(event)
    {
      // store a reference to the data
      // the reason for this is because of multitouch
      // we want to track the movement of this particular touch
      this.data = event.data;
      this.alpha = 0.5;
      this.dragging = true;
    }

    function onDragEnd()
    {
      this.alpha = 1;

      this.dragging = false;

      // set the interaction data to null
      this.data = null;
    }

    function onDragMove()
    {
      if (this.dragging)
      {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
      }
    }

  });
