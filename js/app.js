var app = angular.module('app', ['ngRoute']);


// ROUTES
//------------------------------------------------------------------------
angular
  .module('app')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
    when('/', {
        templateUrl: 'partials/main.html'
    }).
    when('/home', {
        templateUrl: 'partials/main.html'
    }).
    when('/landing', {
        templateUrl: 'partials/landing.html'
    }).
    otherwise({
        redirectTo: '/'
    });

   	$locationProvider.html5Mode(true).hashPrefix('!');
 }]);



