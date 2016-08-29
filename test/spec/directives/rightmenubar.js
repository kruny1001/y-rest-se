'use strict';

describe('Directive: rightMenuBar', function () {

  // load the directive's module
  beforeEach(module('helloIonicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<right-menu-bar></right-menu-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rightMenuBar directive');
  }));
});
