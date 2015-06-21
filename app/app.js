'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.profile',
  'myApp.resume',
  'myApp.portfolio',
  'myApp.connect',
  'myApp.webdevres',
  'myApp.blog',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/profile'});
}]);
