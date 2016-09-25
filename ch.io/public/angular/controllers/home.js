app.controller('homeController', ['$scope', '$rootScope', 'dataService', '$timeout', '$location', function ($scope, $rootScope, dataService, $timeout, $location) {
  $rootScope.dark = true;
  $scope.message = dataService.welcomeMessage;
  $scope.brainimg = "../assets/brain.png";
  $scope.micimg = "../assets/mic.png";

  $scope.customerInput = "";
  $scope.submitData = function() {
    dataService.sendRawTextInput($scope.customerInput);
  }

  $scope.updateInput = function(input) {
    console.log(input);
    if (input == "i" || input == "I") {
        $scope.customerInput = "I have 5 hours. What can I do?";
    }
  }

  $scope.enterKey = function(keyEvent) {
    if (keyEvent.which === 13)
	        $location.url('/itinerary');
  }

}]);
