'use strict';

angular.module('myApp.directives', []).directive('mainFooter', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'app/shared/main-footer/main-footer.html'
  };
});
