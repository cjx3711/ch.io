app.controller('homeController', ['$scope', '$rootScope', 'dataService', '$timeout', '$location', function ($scope, $rootScope, dataService, $timeout, $location) {
  $rootScope.dark = true;
  $scope.message = dataService.welcomeMessage;
  $scope.brainimg = "../assets/brain.png";
  $scope.micimg = "../assets/mic.png";

  $scope.customerInput = "";
  $scope.submitData = function() {
    dataService.sendRawTextInput($scope.customerInput);
  }

  var input = $(".customer-input-box");
  var text = "I have 5 hours. What can I do?";
  var cursor = 0;
  var currentText = "";
  input.keydown(function(e) {
    if ( e.which == 13 ) {
      input.val(text);
      window.location.href = "/#/itinerary";
    }
    if ( e.which == 8 ) {
      currentText = input.val();
      cursor = currentText.length;
    } else {
      e.preventDefault();
      cursor++;
      currentText = text.substring(0,cursor);
      input.val(currentText);

    }
  });
}]);
