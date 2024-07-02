const input = require('readline-sync');

// function getValidInput(prompt, isValid) {
    
//     let userInput = input.question(prompt);

//     while (!isValid(userInput)) {
//       console.log("Invalid input. Try again.");
//       userInput = input.question(prompt);
//     }

//     return userInput;
// }

// let isEven = function(n) {
//   return Number(n) % 2 === 0;
// }

// console.log(getValidInput("Enter an even number: ", isEven));


// TODO 1: write a validator 
// that ensures input starts with "a"


function validatorA(prompt, isValid) {
  let userInput = input.question(prompt);

  while (!isValid(userInput)) {
    console.log('Invalid input. Try again.');
    userInput = input.question(prompt);
  }
  return userInput;
}
let startsWithA = function (prompt) {
return prompt[0] === 'a';
}

console.log(validatorA("Enter a word that begins with the letter 'a' : ", startsWithA));

// TODO 2: write a validator 
// that ensures input is a vowel

function validatorA(prompt, isValid) {
  let userInput = input.question(prompt);

  while (!isValid(userInput)) {
    console.log('Invalid input. Try again.');
    userInput = input.question(prompt);
  }
  return userInput;
}
let vowels;
vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
let startsWithVowel = function (prompt) {
  for (i = 0; i < vowels.length; i++) {
    return prompt[0] === vowels[i];
  }
}

console.log(validatorA("Enter a word that begins with a vowel: ", startsWithVowel));

// Be sure to test your code!
