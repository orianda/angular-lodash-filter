/*!
 * angular-lodash-filter
 * AngularJS (v1) filter wrapper for the lodash library.
 *
 * @version v0.0.0
 * @link https://github.com/orianda/angular-lodash-filter
 * @author Orianda <orianda@paan.de>
 * @license MIT
 */
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