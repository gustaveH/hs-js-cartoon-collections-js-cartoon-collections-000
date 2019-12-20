function dwarfRollCall(dwarves) {
  var string = [];
	dwarves.forEach(function(name, i) {
		string.push(i+1 +". " + name + " ");
	});
	return string.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var calls = [];
    planeteerCalls.forEach(function(element) {
  	element = element.toUpperCase() + "!";
  	calls.push(element);
  });
  return calls;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
	}
	return false;
}

function findTheCheese (foods) {
  var cheese = ["mozarella", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
		var cheeseIndex = cheese.indexOf(foods[i]);
		if(cheeseIndex !== -1) {
			return foods[i];
		}
	}
	return "no cheese!";
}