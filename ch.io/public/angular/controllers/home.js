app.controller('homeController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.message = dataService.welcomeMessage;
}]);