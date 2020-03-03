//Hi, Aigis!
function Hello(input) {

    var greetingArray = ["Greetings", "Hello", "Good day", "Hi", "Howdy", "Hey there", "Sup", "Yo", "Well hello there"]
    var hi=Math.floor(Math.random()*(greetingArray.length));
    greeting = greetingArray[hi]
	}

module.exports = Hello;
