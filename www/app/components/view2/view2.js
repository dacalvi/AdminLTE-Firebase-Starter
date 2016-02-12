'use strict';
angular.module('myApp.view2', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('view2', {
    url: '/view2',
    templateUrl: 'app/components/view2/view2.html',
    controller: 'View2Ctrl'
  });
})
.controller('View2Ctrl', [function() {

}]);
