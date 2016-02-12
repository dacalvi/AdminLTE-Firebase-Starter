'use strict';
angular.module('myApp.login', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'app/components/login/login.html',
    controller: 'LoginCtrl'
  });
})
.controller('LoginCtrl', function($scope) {
  $scope.login = function(){
    console.log("Hola");
  };
});
