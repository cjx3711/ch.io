app.service('dataService', [ '$http', function($http) {
  this.welcomeMessage = "The quick brown fox jumps over the lazy dog.";
  this.sendRawTextInput = function(data) {
    console.log("Sending data", data);
  }

  $http.post('/command', {data: data}).then(
    function successCallback(response) {
      console.log("Server response", response.data);
    },
    function errorCallback(response) {
      console.log("Server error", response);
    }
  );

  this.attractions = [];
  this.attractions.push({
    id: 0,
    name: "Rooftop Swimming Pool and Jacuzzi",
    pos: { x: 877, y: 58.14 },
    category: "Activities",
    tags: ["fitness", "relax", "chill", "sun", "lepak", "swim", "water", "unwind", "destress", "T1"]
    timeTaken: 45
  });
  this.attractions.push({
    id: 1,
    name: "Airport Wellness Oasis",
    pos: { x: 557, y: 990 },
    category: "Activities",
    tags: ["spa", "pamper", "facial", "beauty", "maintenance", "relax", "chill", "unwind", "destress", "foot", "therapy", "toes", "heels", "manicure", "massage", "fish", "doctor", "Garra", "Rufa", "wellness", "oasis", "T1"]
    timeTaken: 120
  });
  this.attractions.push({
    id: 2,
    name: "Fitness Gym",
    pos: { x: 95.8, y: 453.5 },
    category: "Activities",
    tags: ["maintenance", "sport", "muscle", "tone", "workout", "fitness", "gym", "exercise", "running", "lifting", "weights", "T1", "T2"]
    timeTaken: 120
  });
  this.attractions.push({
    id: 3,
    name: "Butterfly Garden",
    pos: { x: 714.09, y: 124.39 },
    category: "Activities",
    tags: ["butterfly", "garden", "nature", "walk", "family", "date", "dating", "serene", "serenity", "child", "children", "kid", "kids", "T3"]
    timeTaken: 20
  });
  this.attractions.push({
    id: 4,
    name: "Outdoor Cactus Garden",
    pos: { x: 984.2, y: 300.5 },
    category: "Activities",
    tags: ["cactus", "garden", "nature", "walk", "family", "date", "dating", "serene", "serenity", "outdoor", "child", "children", "kid", "kids", "T1"]
    timeTaken: 20
  });
  this.attractions.push({
    id: 5,
    name: "Orchid Garden",
    pos: { x: 356.1, y: 359.5 },
    category: "Activities",
    tags: ["flower", "orchid", "garden", "nature", "walk", "family", "date", "dating", "serene", "serenity", "outdoor", "child", "children", "kid", "kids", "T2"]
    timeTaken: 20
  });
  this.attractions.push({
    id: 6,
    name: "Sunflower Garden",
    pos: { x: 88.6, y: 3.1 },
    category: "Activities",
    tags: ["sunflower", "garden", "nature", "walk", "family", "date", "dating", "serene", "serenity", "outdoor", "child", "children", "kid", "kids", "T2"]
    timeTaken: 20
  });
  this.attractions.push({
    id: 7,
    name: "Enchanted Garden",
    pos: { x: 19.8, y: 74.39 },
    category: "Activities",
    tags: ["enchanted", "garden", "nature", "walk", "family", "date", "dating", "serene", "serenity", "outdoor", "child", "children", "kid", "kids", "T2"]
    timeTaken: 20
  });
  this.attractions.push({
    id: 8,
    name: "T2 Movie Theatre",
    pos: { x: 328.3, y: 55.2 },
    category: "Activities",
    tags: ["movie", "theatre", "T2", "relax", "fun"]
    timeTaken: 160
  });
  this.attractions.push({
    id: 9,
    name: "T3 Movie Theatre",
    pos: { x: 30.2, y: 409.7 },
    category: "Activities",
    tags: ["movie", "theatre", "T3", "relax", "fun"]
    timeTaken: 160
  });
  this.attractions.push({
    id: 10,
    name: "The Social Tree",
    pos: { x: 990.2, y: 100.1 },
    category: "Activities",
    tags: ["picture", "image", "social", "selfie", "email", "Facebook", "tree", "T1"]
    timeTaken: 10
  });
  this.attractions.push({
    id: 11,
    name: "Birds in Flight",
    pos: { x: 1200, y: 150 },
    category: "Activities",
    tags: ["bird", "birds", "flight", "art", "appreciation", "trail", "migration", "T3"]
    timeTaken: 10
  });
  this.attractions.push({
    id: 12,
    name: "Slide@T3",
    pos: { x: 1510, y: 200 },
    category: "Activities",
    tags: ["slide", "T3", "fun", "kids", "kid", "child", "children", "family", "exciting", "interesting"]
    timeTaken: 20
  });
  this.attractions.push({
    id: 13,
    name: "Wine and Spirits Duplex",
    pos: { x: 800, y: 900 },
    category: "F&B",
    tags: ["alcohol", "duty", "free", "wine", "spirits", "duplex", "drink", "drinks", "T3"]
    timeTaken: 30
  });
  this.attractions.push({
    id: 14,
    name: "Cosmetics and Perfumes",
    pos: { x: 785, y: 680 },
    category: "Retail",
    tags: ["cosmetics", "perfume", "perfumes", "mascara", "lipstick", "eye", "shadow", "concealer", "beauty", "facial", "fragrance", "fragrances"]
    timeTaken: 30
  });
  this.attractions.push({
    id: 15,
    name: "Bengawan Solo",
    pos: { x: 134, y: 1803 },
    category: "F&B",
    tags: ["baked", "bakery", "cakes", "kueh", "traditional", "T1", "T2", "T3", "Bengawan", "Solo"]
    timeTaken: 20
  });
  this.attractions.push({
    id: 16,
    name: "Bally",
    pos: { x: 324, y: 803 },
    category: "Retail",
    tags: ["T1", "Bally", "shoes", "footwear", "shoe", "style", "accessories"]
    timeTaken: 20
  });this.attractions.push({
    id: 17,
    name: "Burberry",
    pos: { x: 5324, y: 2803 },
    category: "Retail",
    tags: ["luxury", "fashion", "fragrances", "fragrance", "sunglasses", "shades", "cosmetics", "outerwear", "clothes", "Burberry"]
    timeTaken: 20
  });
  this.attractions.push({
    id: 18,
    name: "Calvin Klein Jeans",
    pos: { x: 4324, y: 203 },
    category: "Retail",
    tags: ["Calvin", "Klein", "jeans", "fashion", "denim", "design", "fashion"]
    timeTaken: 20
  });
  this.attractions.push({
    id: 18,
    name: "Candy Empire",
    pos: { x: 24, y: 8003 },
    category: "F&B",
    tags: ["Candy", "Empire", "chocolate", "sweets", "candy", "gourmet", "gift", "gifts", "confectionary", ""]
    timeTaken: 20
  });
  this.attractions.push({
    id: 18,
    name: "Godiva",
    pos: { x: 1324, y: 803 },
    category: "F&B",
    tags: ["chocolate", "sweets", "candy", "gourmet", "gift", "gifts", "confectionary", "godiva"]
    timeTaken: 20
  });
  
}]);
