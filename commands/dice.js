//Dice Function
function Roll(input) {
	
	if(input.length > 10){
		embedTitle = ":game_die: Dice Roll!";
		embedColor = "0xFF0000";
		embedDescription = "Sorry, but please \nkeep the **numbers**\nbelow a **thousand**!";
	} else {
		var dice = input.slice(7, 10);
		var dice = parseInt(dice, 10);
		var roll = Math.floor(Math.random() * dice)+1;
		var rollpercent = (roll / dice);
		embedTitle = ':game_die: Dice Roll!';
		if(rollpercent <= 0.25){
			embedColor = '0xFF0000';
		} else if(0.25 < rollpercent && rollpercent <= 0.5){
			embedColor = '0xE6E600';
		} else if(rollpercent > 0.5 && rollpercent <= 0.75){
			embedColor = "0x99FF33";
		} else if(rollpercent > 0.75 && rollpercent <= 1){
			embedColor = "0x009900";
	}
		embedDescription = `You rolled **${roll}** out of **${dice}**!`;
	}
}

module.exports = Roll;