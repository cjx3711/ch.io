app.service('dataService', [ '$http', function($http) {
  this.welcomeMessage = "The quick brown fox jumps over the lazy dog.";
  this.sendRawTextInput = function(data) {
    console.log("Sending data", data);
    $http.post('/commands', {data: data}).then(
      function successCallback(response) {
        console.log("Server response", response.data);
      },
      function errorCallback(response) {
        console.log("Server error", response);
      }
  );}
}]);
