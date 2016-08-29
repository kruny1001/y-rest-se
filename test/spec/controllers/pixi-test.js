'use strict';

describe('Controller: PixiTestCtrl', function () {

  // load the controller's module
  beforeEach(module('helloIonicApp'));

  var PixiTestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PixiTestCtrl = $controller('PixiTestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
