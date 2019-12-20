//function that accepts dwarf names and returns them numbered in a string

function dwarfRollCall(dwarves) {
  var string = [];
	dwarves.forEach(function(name, i) {            
		string.push(i+1 +". " + name + " ");
	});
	return string.join("");
}

//function should accept an array then convert each element to toUpperCase
function summonCaptainPlanet(planeteerCalls){
  var calls = [];
    planeteerCalls.forEach(function(element) {
  	element = element.toUpperCase() + "!";
  	calls.push(element);
  });
  return calls;
}

//function should accept array calls, then tell whether words are longer than 4 characters

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
	}
	return false;
}

//function should accept array of strings, look through them, and then return the first string hat is a type of cheese

function findTheCheese (foods) {
  var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
		var cheeseIndex = cheese.indexOf(foods[i]);
		if(cheeseIndex !== -1) {
			return foods[i];
		}
	}
	return "no cheese!";
}