app.controller('homeController', ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {
  $rootScope.dark = true;
  $scope.message = dataService.welcomeMessage;
  $scope.submitData = function() {
    dataService.sendRawTextInput($scope.customerInput);
  }


}]);
