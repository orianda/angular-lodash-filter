(function () {
  'use strict';

  angular
    .module('angular-lodash-filter', [])
    .filter('lodash', lodashFilter);

  function lodashFilter() {
    return filter;

    function filter(value, name) {
      var args = Array.prototype.slice.call(arguments, 2);
      args = [value].concat(args);
      return _[name].apply(_, args);
    }
  }
})();