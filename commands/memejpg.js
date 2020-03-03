//Meme Image Commands
//Functions are cool

function MemeJPG(input){

	//Both of these let me get the input, put into lowercase, and take off the +.

    var memeName = input.toLowerCase();
	var memeName = memeName.slice(1);

	// Dictionary defines what the "multiple" memes are. This is when there's a bunch of them in one place.

	memeDict = {
		"boi": 8,
		"deletthis": 30,
		"m2k": 34,
		"shots": 6,
	};
    
	memeNumber = Math.floor(Math.random()*(memeDict[memeName])+1);  

	if(isNaN(memeNumber)){ //If it's in the dictionary, this won't be true and will just continue.
		memeNumber = 1; //If it's not, it's an individual meme (isn't in the dictionary/no alternates.)
	} 
	
    resultingMeme = `assets/meme${memeName}${memeNumber}`;
    memeResult = resultingMeme;
    
    }

module.exports = MemeJPG;
