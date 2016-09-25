app.controller('opsController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.heatmap = false;
  $scope.poll = function() {
      dataService.getHeatmapData().then(
        function successCallback(response) {
          if ( response.data.b1 == "0" ) {
            $scope.heatmap = false;
            toastr.clear();
          } else {
            $scope.heatmap = true;
            toastr.warning('Potential increase in traffic.')
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

  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "99999",
    "hideDuration": "1000",
    "timeOut": "99999",
    "extendedTimeOut": "99999",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }


  $scope.show1 = false;
  $scope.show2 = false;
  $scope.show3 = false;
  $scope.show4 = false;

  setTimeout(function() {
    $scope.show1 = true;
    setTimeout(function() {
      $scope.show2 = true;
      setTimeout(function() {
        $scope.show3 = true;
        setTimeout(function() {
          $scope.show4 = true;
        }, 200);
      }, 200);
    }, 200);
  }, 200);



}]);
