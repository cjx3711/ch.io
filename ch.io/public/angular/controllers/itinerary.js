app.controller('itineraryController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.dark = false;
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
      img: '../assets/attraction-butterfly.png',
      name: 'Butterfly Garden',
      time: "1 hour",
      timeperiod: "3:00 PM - 4:00 PM",
      location: "Terminal 3: Departure Transit Lounge, Level 2 & 3, Transit Area"
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
      img: '../assets/attraction-entertainment.png',
      name: 'Entertainment Deck',
      time: "2 hours",
      timeperiod: "4:20 PM - 6:20 PM",
      location: "Terminal 2: Departure Transit Lounge, next to the Sunflower Garden, Level 3, Transit Area"
    },
    {
      type: 'line'
    },
    {
      type: 'end'
    },
  ]
}]);
