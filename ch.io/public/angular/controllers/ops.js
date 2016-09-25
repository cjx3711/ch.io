app.controller('opsController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.heatmap = false;
  $scope.poll = function() {
      dataService.getHeatmapData().then(
        function successCallback(response) {
          if ( response.data.b1 == "0" ) {
            $scope.heatmap = false;
          } else {
            $scope.heatmap = true;
          }
          console.log($scope.heatmap);
        },
        function errorCallback(response) {
          console.log("Server error", response);
        }
      );
      setTimeout($scope.poll, 2000);
  }
  $scope.poll();
}]);
