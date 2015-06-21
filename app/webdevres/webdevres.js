'use strict';

angular.module('myApp.webdevres', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/webdevres', {
    templateUrl: 'webdevres/webdevres.html',
    controller: 'WebdevresCtrl'
  });
}])

.controller('WebdevresCtrl', [function() {

}]);