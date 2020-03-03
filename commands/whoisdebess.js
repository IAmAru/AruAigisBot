//Who is de bess?
function Whoisdebess(input) {

    var userArray = ["Aru", "Dale", "Cesar", "Axl"];
    var situationArray = ["SDs at 0%.", "is amazing.", 
    "feels nothing when they kill their opponent at 30% because of a cheap mechanic.", 
    "needs to attend a national.", "is destined to beat MKLeo.", 
    "is horrible.", "likes the succ.", "is an Elite Smash scrub.", 
    "holds A at ledge and feels no shame.", "needs to sell game.", 
    "is the only Mario with a frame 5 nair.", "is pretty bad.", 
    "summoned le legendary tucan.                                     ░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░░░░ ░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░░░░ ░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░░░░ ░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░░░░ ░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░░░░ ░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░░░░ ░░░░░░░░░░░░░▐░░░░▐███████████▄░░░░░░ ░░░░░le░░░░░░░▐░░░░▐█████████████▄░░░ ░░░░toucan░░░░░░▀▄░░░▐██████████████▄ ░░░░░░has░░░░░░░░▀▄▄████████████████▄ ░░░░░arrived░░░░░░░░░░░░█▀██████░░░░░", 
    "has no LAN adapter.", "likes just the tip ^.~", "is not lawful.", 
    "is a fraud.", "spams PK Fire.", "got JV3'd by Puppeh."];
    
    
    var userIndex = Math.floor(Math.random()*(userArray.length));
    var situationIndex = Math.floor(Math.random()*(situationArray.length));
    
    user = userArray[userIndex]
    situation = situationArray[situationIndex]
	}

module.exports = Whoisdebess;
