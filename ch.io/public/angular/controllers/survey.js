app.controller('surveyController', ['$scope', 'dataService', function ($scope, dataService) {
	//This is the data sent in from the survey directive
	$scope.answers = [];
	$scope.questionObj = [];
	for (var i = 0, len = $scope.data.length; i < len; i++) {
       $scope.questionObj.push($scope.data[i]);
    }

    $scope.currentQuestion = 0;
    $scope.isLastQuestion = (($scope.questionObj.length - 1) <= $scope.currentQuestion);
    $scope.isFirstQuestion = true;

	$scope.question = $scope.questionObj[$scope.currentQuestion].question;
	$scope.options = $scope.questionObj[$scope.currentQuestion].options;
    
    $scope.nextQuestion = function() {
    	$scope.currentQuestion += 1;
        $scope.isFirstQuestion = ($scope.currentQuestion <= 0);
        $scope.isLastQuestion = (($scope.questionObj.length - 1) <= $scope.currentQuestion);
        $scope.question = $scope.questionObj[$scope.currentQuestion].question;
        $scope.options = $scope.questionObj[$scope.currentQuestion].options;
    }
    $scope.prevQuestion = function() {
    	$scope.currentQuestion -= 1;
        $scope.isFirstQuestion = ($scope.currentQuestion <= 0);
        $scope.isLastQuestion = (($scope.questionObj.length - 1) <= $scope.currentQuestion);
        console.log($scope.isFirstQuestion);
        $scope.question = $scope.questionObj[$scope.currentQuestion].question;
        $scope.options = $scope.questionObj[$scope.currentQuestion].options;
    }
}]);