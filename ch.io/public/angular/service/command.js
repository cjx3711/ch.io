app.service('commandService', function() {
	var tests = ["Where can I find the ATM?",
				"I'm bored",
				"I'm bored. I have 5 hours."];

	var questionWords = ["who", "what", "where", "when", "how", "why"];

	this.newComamnd = function(str) {
		var questionType = "";
		for (word in questionWords) {
			if (str.toLowerCase().includes(word)) {
				questionType = word;
				break;
			}
		}

		switch (questionType) {
			case "who":
				break;
			case "what":
				break;
			case "where":
				break;
			case "when":
				break;
			case "how":
				break;
			case "why":
				break;
			default:
				console.log("Unknown Question Type.");
		}
	};
}]);