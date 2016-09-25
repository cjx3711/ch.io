app.controller('devController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.setHeatmap = function() {
    dataService.setHeatmap(true);
  }
  $scope.unsetHeatmap = function() {
    dataService.unsetHeatmap(true);
  }

}]);
