//Coinflip Function

function Coin(input) {
    const { Discord, RichEmbed }  = require('discord.js')
    const embed = new RichEmbed();

    var coinCounter = 0; //Counts how many times the coin's been flipped at all.
    var heads = 0; // Obviously, counts the number of heads.
    var tails = 0; // Ditto...

    if (input.length === 5) { //checks if input = +roll or +roll [number]
        var coin = Math.floor(Math.random() * Math.floor(2));
        embed.setTitle(":moneybag: Coin Toss!")

        // To compare from Heads and Tails, I'll consider Even and Odd numbers.
        // If the random variable, coin, is even, it'll be considered as heads.
        if(coin == 0){
            embed.setColor("0xFF0000");
            embed.setDescription("The **coin** landed on **heads**!");
            embedMsg = embed;
        // If not, it'll be considered as tails.
        } else if(coin = 1) {
            embed.setColor("0x0066FF");
            embed.setDescription("The **coin** landed on **tails**!");
            embedMsg = embed;
        }
    }

    // From here, there's more consideration between the coins being flipped more than once while under 1000.
    
    else if (input.length == 7 || input.length == 8 || input.length == 9) {
        
        var coinSetLength = input.slice(6); //grabs number we'll need to iterate through.
        var coinSetLength = parseInt(coinSetLength, 10); //makes this a decimal integer from the string
        // this allows me to iterate through it in the while loop coming up.
        
        //This is a special case where there's a 2/3 event, since it's the only "even number" where the set
        //won't end in a tie.

        if (coinSetLength === 2) {
            var coinSetLengthNew = 3;
        }

        //Checks if the number provided is odd.
        else if (coinSetLength % 2 == 1) {
            // Now it sets the max. amount of coinflips possible.
            var coinSetLengthNew = 2 * coinSetLength - 1;
        }
        
        //Now it checks if it's even and if it's not 2. If that's the case, throws an error.
        else if(coinSetLength % 2 == 0 && coinSetLength != 2) {
            
            embed.setTitle(":moneybag: Coin Toss! (Error 1)")
            embed.setDescription("Could not process input.\nPlease try again with any odd digit under 1000.");
            embedMsg = embed;
        }

        //Now that it's past everything,
        while (coinCounter < coinSetLengthNew) {
            var coin = Math.floor(Math.random() * Math.floor(2));
            embed.setTitle(`:moneybag: Coin Toss! (${coinSetLength}/${coinSetLengthNew})`)
           
            if (coin == 0) {
                var heads = heads + 1;
            } else if (coin == 1) {
                var tails = tails + 1;
            }

            var coinCounter = coinCounter + 1;
            if (heads === coinSetLength) {
                embed.setColor("0xFF0000");
                embed.setDescription(`**Heads** won with a final score of:\n\n**Heads:** ${heads}\n**Tails:** ${tails}\n`);
                embedMsg = embed;
                break;
            } else if (tails === coinSetLength) {
                embed.setColor("0x0066FF");
                embed.setDescription(`**Tails** won with a final score of:\n\n**Heads:** ${heads}\n**Tails:** ${tails}\n`);
                embedMsg = embed;
                break;
            }
        }
    } else {
        embed.setTitle(":moneybag: Coin Toss! (Error 2)") //throws in case it's either a number over 1k or anything else
        embed.setDescription("Could not process input. Please try again with any digit under 1000.");
        embedMsg = embed;
    }
    
    }

module.exports = Coin;