(function() {
  var app = angular.module("SiteNavigator");
  
  var NavigationController = function($scope) {
    $scope.navBarItems = 
    [ 
      {
        name : "Home",
        link : "main"
      },
      {
        name : "Contact",
        link : "contact"
      },
      {
        name : "About",
        link : "about"
      }
      ];
  };
  
  app.controller("NavigationController", NavigationController);
} ());