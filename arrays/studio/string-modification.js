const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = str.slice(3) + str.slice(0,3);
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`We can take ${str} and turn it into ${newStr}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numLetters = input.question('How many letters would you like to relocate? ')
console.log(`You would like to relocate ${numLetters} letters`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (numLetters < str.length) {
    console.log(str.slice(numLetters) + str.slice(0, numLetters));
}   else {
    console.log('Input exceeds the length of the word');
    console.log(newStr);
}

/*    Or I can write the if else statement as this...

if (numLetters > str.length) {
    console.log('Input exceeds the length of the word');
    console.log(newStr);
}   else {
    console.log(str.slice(numLetters) + str.slice(0, numLetters));
}
*/