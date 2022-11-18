const Discord = require('discord.js');
const PixivApi = require('pixiv-api-client');
const {Client, GatewayIntentBits, EmbedBuilder, AttachmentBuilder} = require('discord.js')
const pixiv = new PixivApi();
const Aigis = new Client({intents: ['Guilds', 'GuildMessages', 'MessageContent']});
const embed = new EmbedBuilder();


Aigis.on('ready', () => {
  console.log(`Logged in as ${Aigis.user.tag}!`);
});

//Alejandro's ID
const aru = "154078071895359488"

//Message Response to Commands Starts Here
Aigis.on('messageCreate', (message) => {
var input = message.content.toUpperCase(); 

if(input === "PING") {
    message.reply('Pong!');
  }
  
//Hi, Aigis!
if (input == "HI AIGIS" || input == "HELLO AIGIS" || input == "SUP AIGIS" || input == "HI AIGIS!" || input == "HELLO AIGIS!" || input == "YO AIGIS!") {
	try {
		const Hello = require('./commands/hello.js'); 
		Hello(input)
		if(message.author.id == aru){
			greeting = `${greeting}, Aru-sama!`
		} else {
			greeting = `${greeting}, ${message.author}!`
		}
		message.channel.send(greeting)
	}

	catch(err) {
		document.getElementById("demo").innerHTML = err.message;
	}
}

//Goodbye, Aigis
if(input == "BYE AIGIS" || input == "SEE YA AIGIS" || input == "LATER AIGIS" || input == "GOODNIGHT AIGIS" || input == "GOOD NIGHT AIGIS!" || input == "BYE AIGIS!" || input == "SEE YA AIGIS!" || input == "LATER AIGIS!" || input == "GOODNIGHT AIGIS!" || input == "GOOD NIGHT AIGIS!" || input == "BYE, AIGIS" || input == "SEE YA, AIGIS" || input == "LATER, AIGIS" || input == "GOODNIGHT, AIGIS" || input == "GOOD NIGHT, AIGIS" || input == "GOOD NIGHT, AIGIS!" || input == "BYE, AIGIS!" || input == "SEE YA, AIGIS!" || input == "LATER, AIGIS!" || input == "GOODNIGHT, AIGIS!" || input == "GOOD NIGHT, AIGIS!") {
	const Goodbye = require('./commands/goodbye.js')
	Goodbye(input)
	if (message.author.id==aru){
		farewell = `${farewell}, Aru-sama!`;
	} else {
		farewell = `${farewell}, ${message.author}`;
	}
	message.channel.send(farewell)

}

//Whoisdebess?
if(input == "+WHOISDEBESS"){
	const Whoisdebess = require('./commands/whoisdebess.js')
	Whoisdebess(input)
	message.channel.send(`${user} ${situation}`);
}

//money match maker
if(input == "+MMMAKER"){
	const MMMaker = require('./commands/mmmaker.js')
	MMMaker(input);
	message.channel.send(`${user1} vs ${user2} ${situation}`);
}
//Inspirational Quote
if(input == "+INSPIRATIONALQUOTE"){
	const InspirationalQuote = require('./commands/inspirationalquote.js');
	InspirationalQuote(input);
	embed.setTitle(embedTitle);
	embed.setDescription(embedDescription);
    message.channel.send({embeds: [embed]});
}

// Meme JPG Commands
if(input == "+BOI" || input == "+DELETTHIS" || input == "+SHOTS" || input == "+B&" || input == "+BAKA" || input == "+HOLLYWOOD" || input == "+NAIROAPEX" || input == "+WHAT"){
	const MemeJPG = require('./commands/memejpg.js')
	MemeJPG(input)
	const attachment = new AttachmentBuilder(require('path').join(__dirname, `${memeResult}.jpg`));
	message.channel.send({files: [attachment]});
}

//Meme Png Commands
if(input == "+ABSOLUTELYSOLID" || input == "+ADDUP" || input == "+ATTENTION" || input == "+MICDROP" || input == "+THEHARDREAD"){
	const MemeJPG = require('./commands/memejpg.js')
	MemeJPG(input)
	const attachment = new AttachmentBuilder(require('path').join(__dirname, `${memeResult}.png`));
	message.channel.send({files: [attachment]});	
}

//Meme Gif Commands
if(input == "+DIP" || input == "+DONT" || input == "+JUSTDOIT" || input == "+PINGU" || input == "+TECH" || input == "+VIOLIN" || input == "+ILLUMINATI"){
	const MemeJPG = require('./commands/memejpg.js')
	MemeJPG(input)
	const attachment = new AttachmentBuilder(require('path').join(__dirname, `${memeResult}.gif`));
	message.channel.send({files: [attachment]});
}
//Dice Function
if(input.startsWith("+ROLL D")){
	const Roll = require('./commands/dice.js')
	Roll(input)
	embed.setTitle(embedTitle);
	embed.setColor(embedColor);
	embed.setDescription(embedDescription);
	message.channel.send({embeds: [embed]});
}
//Coinflip Function [Embed]
if(input.startsWith("+COIN")){
	const Coin = require('./commands/coin.js'); 
	Coin(input)
	embed.setTitle(embedTitle);
	embed.setColor(embedColor);
	embed.setDescription(embedDescription);
	message.channel.send({embeds: [embed]});
	}
});

Aigis.login(process.env.BOT_TOKEN);
