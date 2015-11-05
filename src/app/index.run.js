(function() {
  'use strict';

  angular
    .module('raskellclient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
