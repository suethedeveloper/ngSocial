'use strict';

angular.module('ngSocial', [
  'ngRoute',
  'ngSocial.view1',
  'ngSocial.view2',
  'ngSocial.facebook'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/facebook'});
}]);
