'use strict';
angular.module('myApp.view1', ['ui.router'])
.config(function($stateProvider){
  $stateProvider.state('view1', {
    url: '/view1',
    templateUrl: 'app/components/view1/view1.html',
    controller: 'View1Ctrl'
  });
})
.controller('View1Ctrl', [function() {
  console.log("View1Ctrl");
}]);
