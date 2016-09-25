app.controller('itineraryController', ['$scope', 'dataService', function ($scope, dataService) {
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
      type: 'walk',
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
