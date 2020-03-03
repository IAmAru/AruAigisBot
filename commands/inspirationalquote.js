//Inspirational Quote

function InspirationalQuote(input){
    const { Discord, RichEmbed }  = require('discord.js')
	const embed = new RichEmbed();
	
    var quoteArray = [`"Life is this crazy, mystical thing, and sometimes, you just go out like a buster... And there's nothing you can do about it."`, `"You only get one stock in real life."`, `"Respect your elders, kid..."`, `"I was just kinda writing..."`, `"It's simple. Don't be bad."`, `"95 dollars ain't shiz."`, `"Kill yourself faggot. You won't."`, `"Ike is from Shadow Dragon, right? ...No, that's Roy's game."`, `"I'm so tasty they call me Canes Sauce around these parts."`, `"What's Maween?"`]
	var quoteAuthor = ['~Joseph "Mang0" Marquez (2015)', '~Juan "Hungrybox" DeBiedma (2016)', '~Kashan "Chillin" Khan (2014)', '~Rodolfo "RGScompany1" Gonzalez (2016)', '~Rodolfo "RGScompany1" Gonzalez (2016)', '~Rodolfo "RGScompany1" Gonzalez (2016)', '~Jason "mew2king" Zimmerman (2015)', '~Jonathan Ndoudi circa 2014', '~Alejandro "Aru" Jimenez (2018)', '~Jonathan Ndoudi (2018)']
	var quoteNumber = Math.floor(Math.random()*quoteArray.length)
	embed.setTitle(quoteArray[quoteNumber]);
	embed.setDescription(quoteAuthor[quoteNumber]);
    embedMsg = embed;
}
    module.exports = InspirationalQuote;
