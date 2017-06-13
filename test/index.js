describe('angular-lodash-filter', function () {
  'use strict';

  var issue;

  beforeEach(module('angular-lodash-filter'));

  beforeEach(inject(function ($filter) {
    issue = $filter('lodash')([{
      prop: 1,
      other: 1
    }, {
      prop: 2,
      other: 1
    }, {
      prop: 3,
      other: 1
    }, {
      prop: 1,
      other: 2
    }, {
      prop: 2,
      other: 2
    }, {
      prop: 3,
      other: 2
    }], 'uniqBy', 'prop');
  }));

  it('should exist', function () {
    expect(issue).toEqual([{
      prop: 1,
      other: 1
    }, {
      prop: 2,
      other: 1
    }, {
      prop: 3,
      other: 1
    }]);
  });
});