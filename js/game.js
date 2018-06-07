'use strict';
console.log('Working');


alert('Welcome to the long awaited expansion that is the AboutMe Game.');

var questionOne = 'Do I have two Sons that are aged 17 and 22';
var answerOne = prompt(questionOne);
console.log(answerOne);
if(answerOne.toUpperCase().trim() === 'YES' || answerOne.toUpperCase().trim() === 'Y')
{
  alert('That is Correct, I do have two sons, who are that old.');

} else if(answerOne.toUpperCase().trim() === 'NO' || answerOne.toUpperCase().trim() === 'N')
{
  alert('That is inCorrect, I am actually that old, Yikes!');
}


var questionTwo = 'Is pepperoni pizza my favorite kind of ZA?';
var answerTwo = prompt(questionTwo);
console.log(answerTwo);
if(answerTwo.toUpperCase().trim() === 'YES' || answerTwo.toUpperCase().trim() === 'Y')
{
  alert('That is Correct, Pepperonni is my Favorite ZA, Tamasos Detriot, to be exact.');

} else if(answerTwo.toUpperCase().trim() === 'NO' || answerTwo.toUpperCase().trim() === 'N')
{
  alert('That is inCorrect, pepperonni for life, unitl my stomach can\'t take it anymore, anyway.');
}


var questionThree = 'Have I owned an Atarri 2600, PS1, PS2, Xbox, Xbox360, XboxOne, and Nintendo?';
var answerThree = prompt(questionThree);
console.log(answerThree);
if(answerThree.toUpperCase().trim() === 'YES' || answerThree.toUpperCase().trim() === 'Y')
{
  alert('That is Correct, I once played GTA on PS2 for like a decade.');

} else if(answerThree.toUpperCase().trim() === 'NO' || answerThree.toUpperCase().trim() === 'N')
{
  alert('That is inCorrect, I have been gaming since the Apple IIe, goto 10 I say...');
}




var questionFour = 'Did I work in a California Bar making Burgers?';
var answerFour = prompt(questionFour);
console.log(answerFour);
if(answerFour.toUpperCase().trim() === 'YES' || answerFour.toUpperCase().trim() === 'Y')
{
  alert('That is Correct, Eastbound Bar and Grill and the HighDive in San Diego, however, In and Out Burger, is still my favorite.');

} else if(answerFour.toUpperCase().trim() === 'NO' || answerFour.toUpperCase().trim() === 'N')
{
  alert('That is inCorrect, I have always worked second jobs at pizza places and burger joints.');
}





var questionFive = 'Did I have a paper route, delivering news papers?';
var answerFive = prompt(questionFive);
console.log(answerFive);
if(answerFive.toUpperCase().trim() === 'YES' || answerFive.toUpperCase().trim() === 'Y')
{
  alert('That is Correct, I was Joliet Herald News Carrier of the Year 1987, I think I was 13.');

} else if(answerFive.toUpperCase().trim() === 'NO' || answerFive.toUpperCase().trim() === 'N')
{
  alert('That is inCorrect, I had 56-60 customers in a 6 block radius and went through three bikes in three years delivering 7 days a week.');
}



while (guess !== '2') {
 
  +  // guess will be null if they hit Cancel
     if (guess === null) {
  -    console.log('Guess is null; breaking');
  +    console.log('User hit cancel for favorite number');
   
       // Escape the loop!
       break;
  while (guess !== '2') {
     guessCount = guessCount + 1;
   
     console.log('guessCount is ' + guessCount);
  -  console.log('end of while loop');
  +  console.log('about to return to top of while loop');
   }
   
  -console.log('while loop exited');
  +console.log('done guessing (while loop is finished)');
   
  +// If they cancelled the prompt...
   if (guess === null) {
  +
     alert('Wimp. My favorite number is 2, obviously.');
  +
   } else {
  +  // They must have gotten the answer right
     console.log('not a wimp');
   
     if (guessCount === 1) {
  -    alert('Right on the first try!'); 
  +    alert('Right on the first try!');
     } else {
       alert('It took ' + guessCount + ' guesses to get it right!');
     }
  
























alert('Thanks for Playin...');