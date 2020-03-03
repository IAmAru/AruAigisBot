//Dice Function
function Roll(input) {
	const { Discord, RichEmbed }  = require('discord.js')
	const embed = new RichEmbed();
	
	if(input.length > 10){
		embed.setTitle(":game_die: Dice Roll!")
		embed.setColor(0xFF0000)
		embed.setDescription("Sorry, but please \nkeep the **numbers**\nbelow a **thousand**!");
		embedMsg = embed;
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
		embedMsg = embed;
	}
}

module.exports = Roll;