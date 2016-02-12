'use strict';

angular.module('myApp.directives').directive('mainHeader', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'app/shared/main-header/main-header.html'
  };
});
