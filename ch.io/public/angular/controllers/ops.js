app.controller('opsController', ['$scope', 'dataService', function ($scope, dataService) {
  $rootScope.dark = false;
  $scope.heatmap = false;
  $scope.poll = function() {
    $scope.heatmap = !$scope.heatmap;
    if ( $scope.heatmap ) {
      toastr.warning('Potential increase in traffic.')
    } else {
      toastr.clear();
    }
    setTimeout($scope.poll, 10000);

    return; //Everything below this line was to poll the server for the presentation
      dataService.getHeatmapData().then(
        function successCallback(response) {
          if ( response.data.b1 == "0" ) {
            $scope.heatmap = false;
            toastr.clear();
          } else {
            $scope.heatmap = true;
            toastr.warning('Potential increase in traffic.')
          }
          console.log($scope.heatmap);
        },
        function errorCallback(response) {
          console.log("Server error", response);
        }
      );

  }
  setTimeout($scope.poll, 2000);

  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "99999",
    "hideDuration": "1000",
    "timeOut": "99999",
    "extendedTimeOut": "99999",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }


/* Set some base options (settings will override the default settings in Chartist.js *see default settings*). We are adding a basic label interpolation function for the xAxis labels. */
var options = {
  axisX: {
    labelInterpolationFnc: function(value) {
      return value + 'pm';
    }
  }
};

/* Now we can specify multiple responsive settings that will override the base settings based on order and if the media queries match. In this example we are changing the visibility of dots and lines as well as use different label interpolations for space reasons. */
var responsiveOptions = [
  ['screen and (min-width: 800px) and (max-width: 1024px)', {
    showPoint: false,
    axisX: {
      labelInterpolationFnc: function(value) {
        return value;
      }
    }
  }],
  ['screen and (max-width: 800px)', {
    showLine: false,
    axisX: {
      labelInterpolationFnc: function(value) {
        return value;
      }
    }
  }]
];

for ( var i = 0; i < 3; i++ ) {
  var series = [];
  for ( var j = 0; j < 6; j++ ) {
    series.push(Math.round(Math.random() * 10))
  }
  /* Add a basic data series with six labels and values */
  var data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    series: [
      {
        data: series
      }
    ]
  };
  /* Initialize the chart with the above settings */
  new Chartist.Line('#chart'+(i+1), data, options, responsiveOptions);
}

}]);
