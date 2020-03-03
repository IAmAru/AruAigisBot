//Hi, Aigis!
function Goodbye(input) {

    var farewellArray = ["Goodbye", "See you later", "Later", "Bye", "Farewell", "Take care", "Have a good one", "So long", "Peace", "Adios", "Hasta la vista", "Sayonara", "Ta-ta for now"];
	var bye=Math.floor(Math.random()*(farewellArray.length));
    farewell = farewellArray[bye]
	}

module.exports = Goodbye;
