app.directive("survey", function() {
    return {
      restrict: 'E',
      replace: true,
      controller: "surveyController",
      scope: { "data": "=" },
      templateUrl : "angular/templates/survey.html"
    };
});