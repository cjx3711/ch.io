app.controller('surveyController', ['$scope', 'dataService', function ($scope, dataService) {
    //This is the data sent in from the survey directive
    $scope.answers = Array();
    $scope.questionObj = [];
    for (var i = 0, len = $scope.data.length; i < len; i++) {
       $scope.questionObj.push($scope.data[i]);
    }

    $scope.currentQuestion = 0;
    $scope.isLastQuestion = (($scope.questionObj.length - 1) <= $scope.currentQuestion);
    $scope.isFirstQuestion = true;

    $scope.question = $scope.questionObj[$scope.currentQuestion].question;
    $scope.options = $scope.questionObj[$scope.currentQuestion].options;
    $scope.key = $scope.questionObj[$scope.currentQuestion].key;
    $scope.type = $scope.questionObj[$scope.currentQuestion].type;
    $scope.sliderval = 5;
    switch ($scope.type) {
        case "number":
            $scope.min = $scope.questionObj[$scope.currentQuestion].min;
            $scope.max = $scope.questionObj[$scope.currentQuestion].max;
            break;

        case "choice":
            break;

        case "multiselect":
            break;
    }

    $scope.nextQuestion = function(ans) {
        $scope.currentQuestion += 1;
        $scope.isFirstQuestion = ($scope.currentQuestion <= 0);
        $scope.isLastQuestion = (($scope.questionObj.length - 1) < $scope.currentQuestion);

        switch ($scope.type) {
            case "number":
                $scope.answers[$scope.key] = $scope.sliderval;
                break;

            case "choice":
                if (ans) {
                    $scope.answers[$scope.key] = ans;
                } else {
                   $scope.answers.push("");
                }
                break;

            case "multiselect":
                break;
        }
        if (($scope.questionObj.length - 1) < $scope.currentQuestion) {
                //Finish survey.. continue to post processing
                $scope.question = "Done!";
                $scope.options = [];
                console.log($scope.answers);
        } else {
            $scope.question = $scope.questionObj[$scope.currentQuestion].question;
            $scope.options = $scope.questionObj[$scope.currentQuestion].options;
            $scope.key = $scope.questionObj[$scope.currentQuestion].key;
            $scope.type = $scope.questionObj[$scope.currentQuestion].type;
        }
    }
    $scope.updateSlider = function(val) {
        $scope.sliderval = val;
    }
    /*  --Unused Prev Question
    $scope.prevQuestion = function() {
        $scope.currentQuestion -= 1;
        $scope.isFirstQuestion = ($scope.currentQuestion <= 0);
        $scope.isLastQuestion = (($scope.questionObj.length - 1) <= $scope.currentQuestion);
        console.log($scope.isFirstQuestion);
        $scope.question = $scope.questionObj[$scope.currentQuestion].question;
        $scope.options = $scope.questionObj[$scope.currentQuestion].options;
    }
*/
}]);