//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

// Part One: Reverse Characters

// 1. Define the function as reverseCharacters. Give it one parameter, which will be the string to reverse.
// 2. Within the function, split the string into an array, then reverse the array.
// 3. Use join to create the reversed string and return that string from the function.
// 4. Below the function, define and initialize a variable to hold a string.
// 5. Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
// 6. Optional: Use method chaining to reduce the lines of code within the function.

// Part Two: Reverse Digits

// 1. Add an if statement to reverseCharacters to check the typeof the parameter.
// 2. If typeof is ‘string’, return the reversed string as before.
// 3. If typeof is ’number’, convert the parameter to a string, reverse the characters, then convert it back into a number.
// 4. Return the reversed number.
// 5. Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise

function reverseCharacters(str) {
        
    // let splitStrArray = str.split('');
    // let reversedArray = splitStrArray.reverse();
    // let joinedReversedArray = reversedArray.join('');
    // return joinedReversedArray;

    //Used method chaining after I knew that I used methods correctly
    let joinedReversedArray;
    
    if (typeof(str) === "string") {
        joinedReversedArray = str.split('').reverse().join('');
   } else if (typeof(str) === 'number') {
       joinedReversedArray = Number(String(str).split('').reverse().join(''));
       
   }  
   return joinedReversedArray;
}

let testString = "I should be in reverse!";
console.log(reverseCharacters(testString));
console.log(reverseCharacters(1234));

//test sample strings:
// console.log(reverseCharacters('apple'));
// console.log(reverseCharacters('LC101'));
// console.log(reverseCharacters('Capitalized Letters'));
// console.log(reverseCharacters('I love the smell of code in the morning.'));



// Part Three: Complete Reversal - Create a new function with one parameter, which is the array we want to change. The function should:

// 1. Define and initialize an empty array.
// 2. Loop through the old array.
// 3. For each element in the old array, call reverseCharacters to flip the characters or digits.
// 4. Add the reversed string (or number) to the array defined in part ‘a’.
// 5. Return the final, reversed array.
// 6. Be sure to print the results from each test case in order to verify your code.

function arrayReversal(array) {
    let reversedArray = [];

    // for (i = 0; i < array.length; i++) {
    //     reversedArray.push(reverseCharacters(array[i]));         // flips that characters in each array item backwards
    // }

    for (let i = array.length; i >= 0, i--;) {                      //What is the -1 for in the equation? Demo showed: for (let i = array.length -1; i--)
        reversedArray.push(reverseCharacters(array[i]));            //Here we started at the last index of array, reversed it and goes down the line

    }
    return reversedArray;
}

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

console.log(arrayReversal(arrayTest1));
console.log(arrayReversal(arrayTest2));
console.log(arrayReversal(arrayTest3));

//So, the array items were printing backwards, but the items themselves were not being reversed. Any easy solution:
// for the return reversedArray; you can just add .reverse() ---- return reversedArray.reverse();  Or you can see above 
// all that another option to reverse the items in the array.

// Bonus Missions

// 1. Have a clear, descriptive name like funPhrase.
// 2. Retrieve only the last character from strings with lengths of 3 or less.
// 3. Retrieve only the first 3 characters from strings with lengths larger than 3.
// 4. Use a template literal to return the phrase We put the '___' in '___'. Fill the first blank with the modified string, and fill the second blank with the original string.

function funPhrase(phrase) {
    let truncPhrase = '';

    if (phrase.length <= 3 && phrase.length > 0) {
        truncPhrase = phrase[phrase.length - 1];        //last index is always <  .length -1  >
    }   else {
        truncPhrase = phrase.slice(0, 3);
    }

    return `We put the ${truncPhrase} in ${phrase}`;
}

// Test Function

// 1. Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
// 2. Call your function and print the returned phrase.

let string = 'Functions rock!'
console.log(funPhrase(string));
console.log(funPhrase('dog'));

// Area of rectangle equal to length x width

// 1. Define a function with the required parameters to calculate the area of a rectangle.
// 2. The function should return the area, NOT print it.
// 3. Call your area function by passing in two arguments - the length and width.
// 4. If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
// 5. Use a template literal to print, “The area is ____ cm^2.”

function areaOfRectangle(length, width = length) {          // width = length, this means that it will be a square if defaulted
    return length * width;
}
console.log(`The area of this rectangle is ${areaOfRectangle(3, 4)}`);
console.log(`The area of this square is ${areaOfRectangle(20)}`);