'use strict';

angular.module('myApp.directives').directive('controlSidebar', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'app/shared/control-sidebar/control-sidebar.html'
  };
});
