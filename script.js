// Code goes here

(function(){
  
  var app = angular.module("SiteNavigator", ['ngRoute']);
  app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider.
        when('/main', {
          templateUrl: './main.html',
          controller: 'HomePageContentController'
        }).
        when('/contact', {
          templateUrl: './contact.html',
          controller: 'BogusController'
        }).
        when('/about', {
          templateUrl: './about.html',
          controller: 'BogusController'
        }).
       /* when('/test', {
          templateUrl: './test.html',
          controller: 'testController'
        }).*/
        otherwise({
          redirectTo: '/main'
        });
      
    }]);

  var BogusController = function($scope) {
  };
  
  app.controller("BogusController", BogusController);
  
} ());