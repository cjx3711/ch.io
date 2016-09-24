app.config( function($routeProvider) {
  $routeProvider.when("/", {
      templateUrl : "templates/home.html",
      controller: "homeController"
  })
});

app.controller('homeController', function ($scope) {

});