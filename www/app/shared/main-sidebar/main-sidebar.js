'use strict';

angular.module('myApp.directives').directive('mainSidebar', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'app/shared/main-sidebar/main-sidebar.html'
  };
});
