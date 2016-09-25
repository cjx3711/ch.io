app.controller('homeController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.message = dataService.welcomeMessage;
  $scope.submitData = function() {
    dataService.sendRawTextInput($scope.customerInput);
  }
  $scope.data = [{"question": "This is q1",
                  "options": ["Choice 1", "Choice 2"],
                  "key": "q1",
                  "type": "number",
                  "min": "Owl",
                  "max": "Tiger"
                },{"question": "This is q2",
                  "options": ["Choice 3", "Choice 4"],
                  "key": "q2",
                  "type": "choice"
                },{"question": "This is q3",
                  "options": ["Choice 5", "Choice 6"],
                  "key": "q3",
                  "type": "choice"
                }];
}]);
