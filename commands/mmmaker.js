//MM Maker
function MMMaker(input) {

    var userArray = ["Aru", "Dale", "Cesar", "Axl"];
	var userIndex1 = Math.floor(Math.random()*(userArray.length));
	var userIndex2 = Math.floor(Math.random()*(userArray.length));
	var userIndex3 = Math.floor(Math.random()*(userArray.length))
    var situationArray = ["for $1000 and the vanilla Fox skin.", "for $4.20 dollars.", "for the memes.", "for the hell of it.", "for fun.", "for glory.", "for a small loan of a million dollars.", `because ${userArray[userIndex3]} instigated.`, `because ${userArray[userIndex1]} was talking mad shit.`];
    var situationIndex = Math.floor(Math.random()*(situationArray.length));
	while(true) {
		if (userIndex1 == userIndex2) {
			var userIndex2 = Math.floor(Math.random() * userArray.length);
		} else {
			break;
		}
    }
    
    user1 = userArray[userIndex1]
    user2 = userArray[userIndex2]
    situation = situationArray[situationIndex]

	}

module.exports = MMMaker;
