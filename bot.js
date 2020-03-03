const Discord = require('discord.js');
const {Client, RichEmbed} = require('discord.js');
const Aigis = new Discord.Client();

Aigis.on('ready', () => {
  console.log(`Logged in as ${Aigis.user.tag}!`);
});

//Alejandro's ID
const aru = "154078071895359488"

//Message Response to Commands Starts Here
Aigis.on('message', msg => {
var input = msg.content.toUpperCase(); 
if(input == "PING") {
    msg.reply('Pong!');
  }
  
//Hi, Aigis!
if (input == "HI AIGIS" || input == "HELLO AIGIS" || input == "SUP AIGIS" || input == "HI AIGIS!" || input == "HELLO AIGIS!" || input == "YO AIGIS!") {
	const Hello = require('./commands/hello.js'); 
	Hello(input)
	if(msg.author.id == aru){
		greeting = `${greeting}, Aru-sama!`
	} else {
		greeting = `${greeting}, ${msg.author}!`
	}
	msg.channel.send(greeting)
}

//Goodbye, Aigis
if(input == "BYE AIGIS" || input == "SEE YA AIGIS" || input == "LATER AIGIS" || input == "GOODNIGHT AIGIS" || input == "GOOD NIGHT AIGIS!" || input == "BYE AIGIS!" || input == "SEE YA AIGIS!" || input == "LATER AIGIS!" || input == "GOODNIGHT AIGIS!" || input == "GOOD NIGHT AIGIS!" || input == "BYE, AIGIS" || input == "SEE YA, AIGIS" || input == "LATER, AIGIS" || input == "GOODNIGHT, AIGIS" || input == "GOOD NIGHT, AIGIS" || input == "GOOD NIGHT, AIGIS!" || input == "BYE, AIGIS!" || input == "SEE YA, AIGIS!" || input == "LATER, AIGIS!" || input == "GOODNIGHT, AIGIS!" || input == "GOOD NIGHT, AIGIS!") {
	const Goodbye = require('./commands/goodbye.js')
	Goodbye(input)
	if (msg.author.id==aru){
		farewell = `${farewell}, Aru-sama!`;
	} else {
		farewell = `${farewell}, ${msg.author}`;
	}
	msg.channel.send(farewell)

}

//Whoisdebess?
if(input == "+WHOISDEBESS"){
	const Whoisdebess = require('./commands/whoisdebess.js')
	Whoisdebess(input)
	msg.channel.send(`${user} ${situation}`);
}

//money match maker
if(input == "+MMMAKER"){
	const MMMaker = require('./commands/mmmaker.js')
	MMMaker(input)
	msg.channel.send(`${user1} vs ${user2} ${situation}`);
}
//Inspirational Quote
if(input == "+INSPIRATIONALQUOTE"){
	const InspirationalQuote = require('./commands/inspirationalquote.js')
	InspirationalQuote(input)
    msg.channel.send(embedMsg);
}

// Meme JPG Commands
if(input == "+BOI" || input == "+DELETTHIS" || input == "+M2K" || input == "+SHOTS" || input == "+DIP" || input == "+B&" || input == "+BAKA" || input == "+EATSHIT" || input == "+HOLLYWOOD" || input == "+NAIROAPEX" || input == "+NODICK" || input == "+WHAT"){
	const MemeJPG = require('./commands/memejpg.js')
	MemeJPG(input)
	msg.channel.sendFile(require('path').join(__dirname, `${memeResult}.jpg`));
}

//Meme Png Commands
if(input == "+ABSOLUTELYSOLID" || input == "+ADDUP" || input == "+ATTENTION" || input == "+MICDROP" || input == "+THEHARDREAD" || input == "+THOTS" ){
	const MemeJPG = require('./commands/memejpg.js')
	MemeJPG(input)
	msg.channel.sendFile(require('path').join(__dirname, `${memeResult}.png`));	
}

//Meme Gif Commands
if(input == "+DIP" || input == "+DONT" || input == "+JUSTDOIT" || input == "+PINGU" || input == "+TECH" || input == "+VIOLIN" || input == "+ILLUMINATI"){
	const MemeJPG = require('./commands/memejpg.js')
	MemeJPG(input)
	msg.channel.sendFile(require('path').join(__dirname, `${memeResult}.gif`));		
}
//Dice Function
if(input.startsWith("+ROLL D")){
	const Roll = require('./commands/dice.js')
	Roll(input)
    msg.channel.send(embedMsg);
}
//Coinflip Function [Embed]
if(input.startsWith("+COIN")){
	const Coin = require('./commands/coin.js'); 
	Coin(input)
	msg.channel.send(embedMsg)
	}

});

Aigis.login("MjU4NDMzMTA5OTcwNzgwMTYw.XikAuw.jS654jSQI5oyeBhlKK6jKZwSFPw");