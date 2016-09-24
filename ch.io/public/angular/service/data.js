app.service('dataService', function() {
  this.welcomeMessage = "The quick brown fox jumps over the lazy dog.";
  this.sendRawTextInput = function(data) {
    console.log("Sending data", data);
  }


  //TODO: MERV HERE

  this.attractions = [];
  this.attractions.push({
    id: 0,
    name: "Hello",
    pos: { x: 100, y: 100 },
    category: "Thing",
    tags: ["tag1", "tag2"]
  });
});
