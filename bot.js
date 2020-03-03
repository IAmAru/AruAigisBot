const Discord = require('discord.js');
const {Client, RichEmbed} = require('discord.js');
const Aigis = new Discord.Client();
const embed = new Discord.RichEmbed();

Aigis.on('ready', () => {
  console.log(`Logged in as ${Aigis.user.tag}!`);
});

//Alejandro's ID
const aru = "154078071895359488"

//Message Response to Commands Starts Here
Aigis.on('message', msg => {
var input = msg.content.toUpperCase(); 
if(input === "PING") {
    msg.reply('Pong!');
  }
  
//Hi, Aigis!
if (input === "HI AIGIS" || input === "HELLO AIGIS" || input === "SUP AIGIS" || input === "HI AIGIS!" || input === "HELLO AIGIS!" || input === "YO AIGIS!") {
	var greetingArray = ["Greetings, ", "Hello, ", "Good day, ", "Hi, ", "Howdy, ", "Hey there, ", "Sup, ", "Yo, ", "Well hello there, "]
	var hi=Math.floor(Math.random()*(greetingArray.length));
	if (msg.author==null) {
		return;
	} else if(msg.author.id===aru){
msg.channel.send(greetingArray[hi] + "Aru-sama!");
	} else {
msg.channel.send(greetingArray[hi] + msg.author + "!");
	}
}
//Goodbye, Aigis
if(input === "BYE AIGIS" || input === "SEE YA AIGIS" || input === "LATER AIGIS" || input === "GOODNIGHT AIGIS" || input === "GOOD NIGHT AIGIS!" || input === "BYE AIGIS!" || input === "SEE YA AIGIS!" || input === "LATER AIGIS!" || input === "GOODNIGHT AIGIS!" || input === "GOOD NIGHT AIGIS!" || input === "BYE, AIGIS" || input === "SEE YA, AIGIS" || input === "LATER, AIGIS" || input === "GOODNIGHT, AIGIS" || input === "GOOD NIGHT, AIGIS" || input === "GOOD NIGHT, AIGIS!" || input === "BYE, AIGIS!" || input === "SEE YA, AIGIS!" || input === "LATER, AIGIS!" || input === "GOODNIGHT, AIGIS!" || input === "GOOD NIGHT, AIGIS!") {
	var farewellArray = ["Goodbye, ", "See you later, ", "Later, ", "Bye, ", "Farewell, ", "Take care, ", "Have a good one, ", "So long, ", "Peace, ", "Adios, ", "Hasta la vista, ", "Sayonara, ", "Ta-ta for now, "];
	var bye=Math.floor(Math.random()*(farewellArray.length));
	if (msg.author.id===aru){
		msg.channel.send(farewellArray[bye] + "Aru-sama!");
	} else {
		msg.channel.send(farewellArray[bye] + msg.author+"!")
	}
}

//Whoisdebess?
if(input === "+WHOISDEBESS"){
	var userArray = ["Aru", "Dale", "Cesar", "Axl"];
	var situationArray = ["SDs at 0%.", "is amazing.", "feels nothing when they kill their opponent at 30% because of a cheap mechanic.", "needs to attend a national.", "is destined to beat MKLeo.", "is horrible.", "likes the succ.", "is an Elite Smash scrub.", "holds A at ledge and feels no shame.", "needs to sell game.", "is the only Mario with a frame 5 nair.", "is pretty bad.", "summoned le legendary tucan.                                     ░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░░░░ ░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░░░░ ░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░░░░ ░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░░░░ ░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░░░░ ░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░░░░ ░░░░░░░░░░░░░▐░░░░▐███████████▄░░░░░░ ░░░░░le░░░░░░░▐░░░░▐█████████████▄░░░ ░░░░toucan░░░░░░▀▄░░░▐██████████████▄ ░░░░░░has░░░░░░░░▀▄▄████████████████▄ ░░░░░arrived░░░░░░░░░░░░█▀██████░░░░░", "has no LAN adapter.", "likes just the tip ^.~", "is not lawful.", "is a fraud.", "spams PK Fire.", "got JV3'd by Puppeh."];
	var userIndex = Math.floor(Math.random()*(userArray.length));
	var situationIndex = Math.floor(Math.random()*(situationArray.length));
	msg.channel.send(`${userArray[userIndex]} ${situationArray[situationIndex]}`);
}

//money match maker
if(input === "+MMMAKER"){
	var userArray = ["Aru", "Dale", "Cesar", "Axl"];
	var situationArray = ["for $1000 and the vanilla Fox skin.", "for $4.20 dollars.", "for the memes.", "for the hell of it.", "for fun.", "for glory.", "for a small loan of a million dollars.", `because ${userArray[userIndex3]} instigated.`, `because ${userArray[userIndex1]} was talking mad shit.`];
	var userIndex1 = Math.floor(Math.random()*(userArray.length));
	var userIndex2 = Math.floor(Math.random()*(userArray.length));
	var userIndex3 = Math.floor(Math.random()*(userArray.length))
	var situationIndex = Math.floor(Math.random()*(situationArray.length));
	while(true) {
		if (userIndex1 == userIndex2) {
			var userIndex2 = Math.floor(Math.random() * userArray.length);
		} else {
			break;
		}
	}
	msg.channel.send(`${userArray[userIndex1]} vs ${userArray[userIndex2]} ${situationArray[situationIndex]}`);
}
//Inspirational Quote
if(input === "+INSPIRATIONALQUOTE"){
	var quoteArray = [`"Life is this crazy, mystical thing, and sometimes, you just go out like a buster... And there's nothing you can do about it."`, `"You only get one stock in real life."`, `"Respect your elders, kid..."`, `"I was just kinda writing..."`, `"It's simple. Don't be bad."`, `"95 dollars ain't shiz."`, `"Kill yourself faggot. You won't."`, `"Ike is from Shadow Dragon, right? ...No, that's Roy's game."`, `"I'm so tasty they call me Canes Sauce around these parts."`, `"What's Maween?"`]
	var quoteAuthor = ['~Joseph "Mang0" Marquez (2015)', '~Juan "Hungrybox" DeBiedma (2016)', '~Kashan "Chillin" Khan (2014)', '~Rodolfo "RGScompany1" Gonzalez (2016)', '~Rodolfo "RGScompany1" Gonzalez (2016)', '~Rodolfo "RGScompany1" Gonzalez (2016)', '~Jason "mew2king" Zimmerman (2015)', '~Jonathan Ndoudi circa 2014', '~Alejandro "Aru" Jimenez (2018)', '~Jonathan Ndoudi (2018)']
	var quoteNumber = Math.floor(Math.random()*quoteArray.length)
	embed.setTitle(quoteArray[quoteNumber]);
	embed.setDescription(quoteAuthor[quoteNumber]);
	msg.channel.send(embed);
}

// Meme JPG Commands
if(input === "+BOI" || input === "+DELETTHIS" || input === "+M2K" || input === "+SHOTS" || input === "+DIP" || input === "+B&" || input === "+BAKA" || input === "+EATSHIT" || input === "+HOLLYWOOD" || input === "+NAIROAPEX" || input === "+NODICK" || input === "+WHAT"){
	var memeName = input.toLowerCase();
	var memeName = memeName.slice(1);
	if(memeName === "boi"){
		var memeCount = 8;
	} else if(memeName === "deletthis"){
		var memeCount = 30;
	} else if(memeName === "m2k"){
		var memeCount = 34;
	} else if(memeName === "shots"){
		var memeCount = 6;
	} else {
		var memeCount = 1;
	}

	var memeNumber = Math.floor(Math.random()*(memeCount)+1);
	var resultingMeme = `assets/meme${memeName}${memeNumber}`;
	msg.channel.sendFile(require('path').join(__dirname, resultingMeme+".jpg"));
}
//Meme Png Commands
if(input === "+ABSOLUTELYSOLID" || input === "+ADDUP" || input === "+ATTENTION" || input === "+MICDROP" || input === "+THEHARDREAD" || input === "+THOTS" ){
	var memeName = input.toLowerCase();
	var memeName = memeName.slice(1);
	var resultingMeme = `assets/meme${memeName}.png`;
	msg.channel.sendFile(require('path').join(__dirname, resultingMeme))	
}

//Meme Gif Commands
if(input === "+DIP" || input === "+DONT" || input === "+JUSTDOIT" || input === "+PINGU" || input === "+TECH" || input === "+VIOLIN" ){
	var memeName = input.toLowerCase();
	var memeName = memeName.slice(1);
	var resultingMeme = `assets/meme${memeName}.gif`;
	msg.channel.sendFile(require('path').join(__dirname, resultingMeme))	
}
//Dice Function
if(input.startsWith("+ROLL D")){
	if(input.length > 10){
	embed.setTitle(":game_die: Dice Roll!")
	embed.setColor(0xFF0000)
	embed.setDescription("Sorry, but please \nkeep the **numbers**\nbelow a **thousand**!");
	msg.channel.send(embed);
} else {
	var dice = input.slice(7, 10);
	var dice = parseInt(dice, 10);
    var roll = Math.floor(Math.random() * dice)+1;
	var rollpercent = (roll / dice);
    embed.setTitle(':game_die: Dice Roll!')
	if(rollpercent <= 0.25){
		embed.setColor(0xFF0000)
	} else if(0.25 < rollpercent && rollpercent <= 0.5){
		embed.setColor(0xE6E600)
	} else if(rollpercent > 0.5 && rollpercent <= 0.75){
		embed.setColor(0x99FF33)
	} else if(rollpercent > 0.75 && rollpercent <= 1){
		embed.setColor(0x009900)
}
    embed.setDescription(`You rolled **${roll}** out of **${dice}**!`);
    msg.channel.send(embed);
}}

//Coinflip Function [Embed]
if(input.startsWith("+COIN")){
var coinCounter = 0;
var heads = 0;
var tails = 0;
if(input.length === 5){ //checks if input = +roll or +roll [number]
	var coin = Math.floor(Math.random()*2)+1;
	embed.setTitle(":moneybag: Coin Toss!")
	if(coin === 1){
		embed.setColor("0xFF0000");
		embed.setDescription("The **coin** landed on **heads**!");
		msg.channel.send(embed);
	} else if(coin === 2){
		embed.setColor("0x0066FF");
		embed.setDescription("The **coin** landed on **tails**!");
		msg.channel.send(embed);
	}
} 
else if(input.length === 7 || input.length === 8 || input.length === 9){
var coinSetLength = input.slice(6); //grabs number
var coinSetLengthNumOld = parseInt(coinSetLength, 10);
if(coinSetLengthNumOld === 2){ //special "even number" case since 2/3 is a thing
	var coinSetLengthNumNew = 3;
} 
else if(coinSetLengthNumOld%2 === 1){
	var coinSetLengthNumNew = coinSetLengthNumOld + (coinSetLengthNumOld - 1);
}
 else if(coinSetLengthNumOld%2 === 0 && coinSetLengthNumOld != 2){
	embed.setTitle(":moneybag: Coin Toss! (Error 1)") //throws in case it's an even number
	embed.setDescription("Could not process input. Please try again with any odd digit under 1000.");
	msg.channel.send(embed);
}
while(coinCounter < coinSetLengthNumNew){
	var coin = Math.floor(Math.random()*2)+1;
	embed.setTitle(`:moneybag: Coin Toss! (${coinSetLengthNumOld}/${coinSetLengthNumNew})`)
	if(coin === 1){
		var heads = heads + 1;
	} else if(coin === 2){
		var tails = tails + 1;
	} 
	var coinCounter = coinCounter + 1;
	if(heads === coinSetLengthNumOld){
		embed.setColor("0xFF0000");
		embed.setDescription(`**Heads** won with a final score of:\n\n**Heads:** ${heads}\n**Tails:** ${tails}\n`);
		msg.channel.send(embed);
		var coinCounter = 0;
		break;
	} else if(tails === coinSetLengthNumOld){
		embed.setColor("0x0066FF");
		embed.setDescription(`**Tails** won with a final score of:\n\n**Heads:** ${heads}\n**Tails:** ${tails}\n`);
		msg.channel.send(embed);
		var coinCounter = 0;
		break;
}}} else { 
	embed.setTitle(":moneybag: Coin Toss! (Error 2)") //throws in case it's either a number over 1k or anything else
	embed.setDescription("Could not process input. Please try again with any digit under 1000.");
	msg.channel.send(embed);
}}

});

Aigis.login(process.env.BOT_TOKEN);