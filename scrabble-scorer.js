// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
return letterPoints
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! \n\nEnter a word to score: ");
  return word
};

let simpleScore = function(word){
 return word.length
};

let vowelBonusScore = function(word){
  word = word.toUpperCase();
  let vowels = 0;
  let consonants = 0;

  for(let i = 0; i<word.length;i++){
     if(word[i] == 'A'|| word[i] == 'E'||word[i] == 'I'||word[i] == 'O'||word[i] == 'U'){
    vowels = vowels+3
      } else {
    consonants++
      }
    }
return vowels+consonants;
};

let scrabbleScore = function(word){
     let score = 0;
   for(let i=0; i<word.length;i++){
     score = score +newPointStructure[word[i].toLowerCase()]
   }
   return score
};

const scoringAlgorithms = [
  {
  'name':'Simple Score',
  'description':'Each letter is worth 1 point.',
  'scoringFunction': simpleScore
  },
  {
  'name':'Bonus Vowels',
  'description':'Vowels are 3 pts, consonants are 1 pt.',
  'scoringFunction':vowelBonusScore
  },
  {
  'name':'Scrabble',
  'description':'The traditional scoring algorithm.',
  'scoringFunction':scrabbleScore
  }
  ];

function scorerPrompt(word) {
     let scoringMethod = input.question("Which scoring algorithm would you like to use? \n \n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system \n Enter 0, 1, or 2: ");
  console.log(`Score for '${word}': ${scoringAlgorithms[scoringMethod]['scoreingFunction'](word)}`);
}

function transform(oldPoint) {
  let tempObj = {};
  	  for (const pointValue in oldPoint){  
        for (let j=0; j<oldPoint[pointValue].length;j++ ){
          tempObj[oldPoint[pointValue][j].toLowerCase()] = Number(pointValue);
        }  
      }
      return tempObj;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
let word = initialPrompt();
scorerPrompt(word);   
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

