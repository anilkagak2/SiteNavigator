(function() {
  var app = angular.module("SiteNavigator");
  
  var TestController = function($scope, $http) {
    $scope.searchString = "cars";
    $scope.apiKey = "AIzaSyBM0D2VZ1fNrIRZyIP5d74w8Ka-_SYrfuM";
    $scope.searchType = "image";
    $scope.customSearchUrl = "https://www.googleapis.com/customsearch/v1";
    
    // search engine id (custom search engine)
    $scope.cx = "009753916768764773814:syuvgkje1zu";

    $scope.search = function() {
      var url = "http://art-list.io/MyWs.aspx/ClientSearchProduct";
      var data = {
        CategoryID : 0,
        MyOdrer : 1,
        Search : "",
        Tempo : "Any",
        maximumRows : 20,
        startRowIndex : 141
      };

    $.ajax({
        type: "POST",
        url: url,
        crossDomain : true,
        data : data
    })
    .done(function( data ) {
        console.log("done");
        console.log("Data: " + data );
    })
    .fail( function(xhr, textStatus, errorThrown) {
        alert(xhr.responseText);
        alert(textStatus);
    });

      console.log(url);
    }
    
    $scope.search();
  };
  
  app.controller("testController", TestController);
} ());