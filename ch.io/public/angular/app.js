app.config( function($routeProvider) {
  $routeProvider.when("/", {
      templateUrl : "templates/home.html",
      controller: "homeController"
  })

  $routeProvider.when("/directory", {
      templateUrl : "templates/directory.html",
      controller: "directoryController"
  })
  $routeProvider.when("/ops", {
      templateUrl : "templates/ops.html",
      controller: "opsController"
  })
  $routeProvider.when("/itinerary", {
      templateUrl : "templates/itinerary.html",
      controller: "itineraryController"
  })
  $routeProvider.when("/about", {
      templateUrl : "templates/about.html",
      controller: "aboutController"
  })
});

app.config(function($provide) {
    $provide.decorator('ngViewDirective', function($delegate) {
        var directive = $delegate[0];
        directive.replace = true;

        return $delegate;
    });
});
