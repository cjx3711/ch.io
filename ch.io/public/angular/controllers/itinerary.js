app.controller('itineraryController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.dark = false;
  $scope.container = []
  var i1 = [
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
      img: 'https://placehold.it/400x300',
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
      img: 'https://placehold.it/400x300',
      name: 'Rooftop Swimming Pool and Jacuzzi',
      time: "1.5 hours",
      timeperiod: "4:20 PM - 5:50 PM",
      location: "Terminal 2: Departure Transit Lounge, next to the Sunflower Garden, Level 3, Transit Area"
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
      type: 'food',
      img: 'https://placehold.it/400x300',
      name: 'Bengawan Solo',
      time: "15 minutes",
      timeperiod: "6:00 PM - 6:15 PM",
      location: "Terminal 1, Terminal 2, Terminal 3"
    },
    {
      type: 'end'
    },
  ];

  var i2 = [
    {
      type: 'start'
    },
    {
      type: 'line'
    },
    {
      type: 'walk',
      time: "15 min"
    },
    {
      type: 'line'
    },
    {
      type: 'attraction',
      img: 'https://placehold.it/400x300',
      name: 'Social Tree',
      time: "15 minutes",
      timeperiod: "3:00 PM - 3:15 PM",
      location: "Terminal 1"
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
      img: 'https://placehold.it/400x300',
      name: 'Sunflower Garden',
      time: "1 hour",
      timeperiod: "3:27 PM - 4:27 PM",
      location: "Terminal 2"
    },
    {
      type: 'line'
    },
    {
      type: 'walk',
      time: "15 min"
    },
    {
      type: 'retail',
      img: 'https://placehold.it/400x300',
      name: 'Burberry',
      time: "30 minutes",
      timeperiod: "4:42 PM - 5:12 PM",
      location: "Terminal 1, Terminal 2, Terminal 3"
    },
    {
      type: 'end'
    },
  ];

  var i3 = [
    {
      type: 'start'
    },
    {
      type: 'line'
    },
    {
      type: 'walk',
      time: "5 min"
    },
    {
      type: 'line'
    },
    {
      type: 'retail',
      img: 'https://placehold.it/400x300',
      name: 'Cosmetics and Perfume',
      time: "45 minutes",
      timeperiod: "11:00 AM - 11:45 AM",
      location: "Terminal 1"
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
      type: 'food',
      img: 'https://placehold.it/400x300',
      name: '4 Fingers Crispy Chicken',
      time: "40 minutes",
      timeperiod: "11:55 AM - 12:35 PM",
      location: "Terminal 3"
    },
    {
      type: 'line'
    },
    {
      type: 'walk',
      time: "15 min"
    },
    {
      type: 'line'
    },
    {
      type: 'attraction',
      img: 'https://placehold.it/400x300',
      name: 'Free Singapore Tour',
      time: "120 minutes",
      timeperiod: "12:50 PM - 14:50 PM",
      location: "Terminal 2, Terminal 3"
    },
    {
      type: 'end'
    },
  ];
  $scope.container.push(i1);
  $scope.container.push(i2);
  $scope.container.push(i3);
  $scope.parts = $scope.container[0];
}]);
