(function() {
  var app = angular.module("SiteNavigator");
  
  var HomePageContentController = function($scope, $http) {
    $scope.searchString = "cars";
    $scope.apiKey = "AIzaSyBM0D2VZ1fNrIRZyIP5d74w8Ka-_SYrfuM";
    $scope.searchType = "image";
    $scope.customSearchUrl = "https://www.googleapis.com/customsearch/v1";
    
    // search engine id (custom search engine)
    $scope.cx = "009753916768764773814:syuvgkje1zu";

    $scope.search = function() {
      $scope.searchResults = {};
      var customSearchQueryUrl = 
        $scope.customSearchUrl
        + "?"
        + "q=" + $scope.searchString
        + "&cx=" + $scope.cx
        + "&searchType=" + $scope.searchType
        + "&key=" + $scope.apiKey;

      console.log(customSearchQueryUrl);

      $http
      .get(customSearchQueryUrl)
      .then(
        function(response) {
          $scope.searchResults = response.data.items;
          console.log("got data ");
        },
        function(error) {
          console.log("error occurred " + error);
          $scope.searchResults = {};
        }
      );
      
    }
    
    $scope.search();
  };
  
  app.controller("HomePageContentController", HomePageContentController);
} ());