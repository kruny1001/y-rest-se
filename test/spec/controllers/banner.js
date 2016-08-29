'use strict';

describe('Controller: BannerCtrl', function () {

  // load the controller's module
  beforeEach(module('helloIonicApp'));

  var BannerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BannerCtrl = $controller('BannerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
