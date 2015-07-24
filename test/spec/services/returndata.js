'use strict';

describe('Service: returnData', function () {

  // load the service's module
  beforeEach(module('portfolioApp'));

  // instantiate service
  var returnData;
  beforeEach(inject(function (_returnData_) {
    returnData = _returnData_;
  }));

  it('should do something', function () {
    expect(!!returnData).toBe(true);
  });

});
