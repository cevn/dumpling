'use strict';

describe('Service: jsonService', function () {

  // load the service's module
  beforeEach(module('dumplingApp'));


  // instantiate service
  var jsonService;
  beforeEach(inject(function (_jsonService_) {
    jsonService = _jsonService_;
  }));

  it('should do something', function () {
    expect(!!jsonService).toBe(true);
  });

});
