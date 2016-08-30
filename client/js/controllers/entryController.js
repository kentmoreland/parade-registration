angular.module('paradeEntry', ['ngResource']).controller('entryController', ['$scope', '$resource', function($scope, $resource){
  var Entry = $resource('/api/entries/');

  Entry.query(function(results){
    $scope.entries = results;
  });

  $scope.entries = [];

  $scope.submitEntry = function(){
    var entry = new Entry();
    entry.name = $scope.entryName;
    entry.$save(function(result){
      $scope.entries.push(result);
      $scope.entryName = '';
    })
  }

}]);

