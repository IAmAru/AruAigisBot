//Coinflip Function [Embed]
function Coin(input) {
    const { Discord, RichEmbed }  = require('discord.js')
    const embed = new RichEmbed();

    var coinCounter = 0;
    var heads = 0;
    var tails = 0;
    if (input.length === 5) { //checks if input = +roll or +roll [number]
        var coin = Math.floor(Math.random() * 2) + 1;
        embed.setTitle(":moneybag: Coin Toss!")
        if (coin === 1) {
            embed.setColor("0xFF0000");
            embed.setDescription("The **coin** landed on **heads**!");
            embedMsg = embed;
        } else if (coin === 2) {
            embed.setColor("0x0066FF");
            embed.setDescription("The **coin** landed on **tails**!");
            embedMsg = embed;
        }
    }
    else if (input.length === 7 || input.length === 8 || input.length === 9) {
        var coinSetLength = input.slice(6); //grabs number
        var coinSetLengthNumOld = parseInt(coinSetLength, 10);
        if (coinSetLengthNumOld === 2) { //special "even number" case since 2/3 is a thing
            var coinSetLengthNumNew = 3;
        }
        else if (coinSetLengthNumOld % 2 === 1) {
            var coinSetLengthNumNew = coinSetLengthNumOld + (coinSetLengthNumOld - 1);
        }
        else if (coinSetLengthNumOld % 2 === 0 && coinSetLengthNumOld != 2) {
            embed.setTitle(":moneybag: Coin Toss! (Error 1)") //throws in case it's an even number
            embed.setDescription("Could not process input. Please try again with any odd digit under 1000.");
            embedMsg = embed;
        }
        while (coinCounter < coinSetLengthNumNew) {
            var coin = Math.floor(Math.random() * 2) + 1;
            embed.setTitle(`:moneybag: Coin Toss! (${coinSetLengthNumOld}/${coinSetLengthNumNew})`)
            if (coin === 1) {
                var heads = heads + 1;
            } else if (coin === 2) {
                var tails = tails + 1;
            }
            var coinCounter = coinCounter + 1;
            if (heads === coinSetLengthNumOld) {
                embed.setColor("0xFF0000");
                embed.setDescription(`**Heads** won with a final score of:\n\n**Heads:** ${heads}\n**Tails:** ${tails}\n`);
                var coinCounter = 0;
                embedMsg = embed;
            } else if (tails === coinSetLengthNumOld) {
                embed.setColor("0x0066FF");
                embed.setDescription(`**Tails** won with a final score of:\n\n**Heads:** ${heads}\n**Tails:** ${tails}\n`);
                var coinCounter = 0;
                embedMsg = embed;
            }
        }
    } else {
        embed.setTitle(":moneybag: Coin Toss! (Error 2)") //throws in case it's either a number over 1k or anything else
        embed.setDescription("Could not process input. Please try again with any digit under 1000.");
        embedMsg = embed;
    }
    
    }

module.exports = Coin;