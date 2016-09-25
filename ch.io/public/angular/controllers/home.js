app.controller('homeController', ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {
  $rootScope.dark = true;
  $scope.message = dataService.welcomeMessage;
  $scope.brainimg = "../assets/brain.png";
  $scope.micimg = "../assets/mic.png";

  $scope.submitData = function() {
    dataService.sendRawTextInput($scope.customerInput);
  }


}]);
