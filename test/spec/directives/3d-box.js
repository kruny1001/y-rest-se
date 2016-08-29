'use strict';

describe('Directive: 3dBox', function () {

  // load the directive's module
  beforeEach(module('helloIonicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<3d-box></3d-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the 3dBox directive');
  }));
});
