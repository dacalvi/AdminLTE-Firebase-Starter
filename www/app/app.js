'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.login',
  'myApp.version',
  'myApp.directives'
])
.run(['$rootScope', '$state', 'AuthFactory', '$location', function ($rootScope, $state, AuthFactory, $location) {
    $rootScope.$on('$stateChangeStart', function (event) {
        if (!AuthFactory.isLoggedIn()) {
            if($location.$$path != '/login'){
              console.log('DENY');
              event.preventDefault();
              $location.path('/login');
            }
        }
        else {
            console.log('ALLOW');
            //$state.go('view1');
        }
    });
}])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise(function($injector, $location){
    return 'login';
  });
});
