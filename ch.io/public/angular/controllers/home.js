app.controller('homeController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.message = dataService.welcomeMessage;
  $scope.submitData = function() {
    dataService.sendRawTextInput($scope.customerInput);
  }
  $scope.data = { "question": "This is q1",
                  "options": ["Choice 1", "Choice 2"]
                };
}]);
