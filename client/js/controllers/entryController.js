var paradeapp = angular.module('paradeEntry', ['ngResource', 'ui.router'])

paradeapp.controller('entryController', ['$scope', '$resource', function($scope, $resource){
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

paradeapp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/partials/home.html'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'views/partials/about.html'
    })

    .state('form', {
      url: '/form',
      templateUrl: 'views/partials/entryForm.html'
    })

    .state('list', {
      url: '/list',
      templateUrl: 'views/partials/entryList.html'
    })

});

