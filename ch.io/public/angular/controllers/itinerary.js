app.controller('itineraryController', ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {
  $rootScope.dark = false;

  $scope.parts = [
    {
      type: 'start'
    },
    {
      type: 'line'
    },
    {
      type: 'walk',
      time: "10 min"
    },
    {
      type: 'line'
    },
    {
      type: 'attraction',
      img: 'http://placehold.it/400x300',
      name: 'Butterfly gardern',
      time: "1 hr",
      location: "T3"
    },
    {
      type: 'line'
    },
    {
      type: 'train',
      time: "12 min"
    },
    {
      type: 'line'
    },
    {
      type: 'attraction',
      img: 'http://placehold.it/400x300',
      name: 'Butterfly gardern',
      time: "1 hr",
      location: "T3"
    },
    {
      type: 'line'
    },
    {
      type: 'end'
    },
  ]
}]);
