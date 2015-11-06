(function() {
  'use strict';

  angular
    .module('raskellclient')
    .directive('raskellNavbar', raskellNavbar);

  /** @ngInject */
  function raskellNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/navbar/navbar.html',
      scope: {
      }
    };

    return directive;
  }

})();
