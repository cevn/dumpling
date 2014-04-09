'use strict';

describe('Service: Jsonservice', function () {

  // load the service's module
  beforeEach(module('scriptsApp'));

  // instantiate service
  var Jsonservice;
  beforeEach(inject(function (_Jsonservice_) {
    Jsonservice = _Jsonservice_;
  }));

  it('should do something', function () {
    expect(!!Jsonservice).toBe(true);
  });

});
