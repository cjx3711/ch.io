app.service('dataService', function() {
  this.welcomeMessage = "The quick brown fox jumps over the lazy dog.";
  this.sendRawTextInput = function(data) {
    console.log("Sending data", data);
  }
});
