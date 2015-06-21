'use strict';

angular.module('myApp.connect', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/connect', {
    templateUrl: 'connect/connect.html',
    controller: 'ConnectCtrl'
  });
}])

.controller('ConnectCtrl', [function() {

}]);