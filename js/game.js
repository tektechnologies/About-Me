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
/**
   *logic and structure from:
   *http://davidbau.com/javascript/learn/04-guess.html
   *I did go through entire code and rewrite it. added and subtracted code.
   *Beggining of lab 3.
   */
/**Jennifer Nordell
* Math.random() generates a number
*between 0 and 1 but not including 1. So if we multiply it
*by 10 and then take the floor of it, we will only ever get
*a possible range of 0 to 9.Adding the one not only increases
*the upper bound but also the lower bound. So let's say we
*generated a 0.001. Now when we multiply that by 10 (result: 0.01) and take the floor of
*that we get a 0. But adding the one guarantees that our
*lowest number will never be lower than 1.*/
var y = Math.floor(Math.random() * 10) + 1;
var opportunities = 4;
var robotVoice = 'Guess a integer from 1 to 10!';

/*beggining of while loop checks the condition to see if there are any turns left. */
while (opportunities > 0) {
  /*Lets the user know to guess an integer and how many chances are left.*/
  var userChoice = prompt(robotVoice + ' You have ' + opportunities + ' try\'s to go.');
  /*Lets the out of the program if they select cancel.*/
  if (!userChoice){
    break;
  }
  /**The Number() function converts the object
   argument to a number that represents the object's value. */
  userChoice = Number(userChoice);
  console.log('userChoice is ' + userChoice);
  console.log('Random generator number is ' + y);

  /**check condition of input to random number selected */
  if (userChoice === y) {
    alert('thats right you guessed the random number way to go!');
    /**I need help with this part I know I need it I just dont know why. */
    opportunities = 0;
    break;
  } else {
    /*Notfies user that they were wrong and take the input decides if
    * it was higher or lower than the random number in the if statements. */
    robotVoice = 'You were close, but no, try again.';
    if (userChoice < y){
      robotVoice += ' Too Low!';
    }
    if (userChoice > y) {
      robotVoice += ' Too High!';
    }
    /*This decrements the opportunities each time the user enters a try. */
    opportunities = opportunities - 1;
    console.log('guessCount is ' + opportunities);

  }
}
/*This line of code sits outside the loop so that if the user cancels or fails
* to guess correct, then they are told what the answer is. */
alert('The Random number Generator choose ' + y + ' as it\'s number .');



var states = ['ILLINIOS', 'IOWA', 'ARKANASAS', 'CALIFORNIA','TEXAS','OMAN','GERMANY'];
console.log(states.length);
var attempts = 0;



while(attempts !== 7){
  var userAnswer = prompt('What states of the world, have I lived in?');
  var userAnswerTrimmedToUpper = userAnswer.toUpperCase().trim();
  if (states.indexOf(userAnswerTrimmedToUpper) >= 0) {
    alert('Yes! ' + userAnswer + ' is one of my favorite states!');
  } else {
    alert('WRONG');

  }
  attempts++;
}

alert('All states that I lived in are: ' + states.join(', '));

alert('Thanks for Playin...');
