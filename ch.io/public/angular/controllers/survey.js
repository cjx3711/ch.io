app.controller('surveyController', ['$scope', 'dataService', function ($scope, dataService) {
	//This is the data sent in from the survey directive
	$scope.question = $scope.data.question;
	$scope.options = $scope.data.options; //Array

}]);