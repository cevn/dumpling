'use strict';

describe('Service: foods', function () {

  // load the service's module
  beforeEach(module('dumplingApp'));

  // instantiate service
  var foods;
  beforeEach(inject(function (_foods_) {
    foods = _foods_;
  }));

  it('should do something', function () {
    expect(!!foods).toBe(true);
  });

});
