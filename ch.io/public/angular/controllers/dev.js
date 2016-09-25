app.controller('devController', ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {
  $rootScope.dark = false;
  $scope.setHeatmap = function() {
    dataService.setHeatmap(true);
  }
  $scope.unsetHeatmap = function() {
    dataService.unsetHeatmap(true);
  }

}]);
