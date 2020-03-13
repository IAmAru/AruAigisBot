//Coinflip Function

function Coin(input) {
    var coinCounter = 0; //Counts how many times the coin's been flipped at all.
    var heads = 0; // Obviously, counts the number of heads.
    var tails = 0; // Ditto...

    if (input.length === 5) { //checks if input = +roll or +roll [number]
        //To be able to use the .slice function, I need the coin var. to be a string.
        var coin = `${Math.random()}`
        var random_integer = coin.slice(coin.length - 1) // The -1 ensures I'll always take the last number.

        embedTitle = ":moneybag: Coin Toss!"

        // To compare from Heads and Tails, I'll consider Even and Odd numbers.
        // If the last number from the random variable from before is even, it'll be considered as heads.

        if(random_integer % 2 == 0){
            embedColor = "0xFF0000";
            embedDescription = "The **coin** landed on **heads**!";

        // If not, it'll be considered as tails.
        } else if(random_integer != 0) {
            embedColor = "0x0066FF";
            embedDescription = "The **coin** landed on **tails**!";
        }
    }

// The code from here is essentially the same, barring the various iterations it must go through.
    
    else if (input.length == 7 || input.length == 8 || input.length == 9) {
        
        var coinSetLength = input.slice(6); //Grabs number we'll need to iterate through.
        var coinSetLength = parseInt(coinSetLength, 10); //Makes this a decimal integer from the string gathered.
    
        //Throws this error in case it's as a string of the specified sizes by checking if the length is invalid.    
        if(isNaN(coinSetLength)){
            embedTitle = ":moneybag: Coin Toss! (Error 2)"
            embedDescription = "Could not process input. \nPlease try again with any digit under 1000.";
            embedColor = "0xFFFFFF"
        }
        // This allows me to iterate through it in the while loop coming up.
        
        //This is a special case where there's a 2/3 event, since it's the only "even number" where the set
        //won't have the possibility to end in a tie.

        if (coinSetLength == 2) {
            var coinSetLengthNew = 3;
        }

        //Checks if the number provided is odd and able to declare a winner.
        else if (coinSetLength % 2 != 0) {
            // Now it sets the max. amount of coinflips possible.
            var coinSetLengthNew = 2 * coinSetLength - 1;
        }
        
        //Now it checks if it's even and if it's not 2. If that's the case, throws an error.
        else if(coinSetLength % 2 == 0 && coinSetLength != 2) {
            
            embedTitle = ":moneybag: Coin Toss! (Error 1)"
            embedDescription = "Could not process input.\nPlease try again with any odd digit under 1000.";
        }

        //Now that it's past everything,
        while (coinCounter < coinSetLengthNew) {
            // Same method of declaring a winner as before-- even and odd numbers.
            var coin = `${Math.random()}`
            var random_integer = coin.slice(coin.length - 1)
            embedTitle = `:moneybag: Coin Toss! (${coinSetLength}/${coinSetLengthNew})`;
           
            if (random_integer % 2 == 0) {
                var heads = heads + 1; //Adding a point per iteration to the winner.
            } else if (random_integer % 2 != 0) {
                var tails = tails + 1;
            }

            var coinCounter = coinCounter + 1; //Adds a tally to the iteration to know when to stop.

            // Checks for a winner. If false, the loop continues.
            if (heads == coinSetLength) {
                embedColor = "0xFF0000";
                embedDescription = `**Heads** won with a final score of:\n\n**Heads:** ${heads}\n**Tails:** ${tails}\n`;
                break;
            } else if (tails == coinSetLength) {
                embedColor = "0x0066FF";
                embedDescription = `**Tails** won with a final score of:\n\n**Heads:** ${heads}\n**Tails:** ${tails}\n`;
                break;
            }
        }
    } else {
        //Throws this error in case it's either a number over 1,000 or anything else, such as a string.
        embedTitle = ":moneybag: Coin Toss! (Error 2)";
        embedDescription = "Could not process input. \nPlease try again with any digit under 1000.";
        embedColor = "0xFFFFFF"
    }   
}

module.exports = Coin;