//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.

console.log(language[0] + language[4]);


//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for '${language}' is '${language[0]}${language[4]}'`);

//Or based on the check your solution, it could look like this:
let initials = language[0] + language[4];
console.log(`The abbreviation for '${language}' is '${initials}'`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.


console.log(language.slice(0,4).toUpperCase().replace("J", "t") + language.slice(4,10).toLowerCase().replace("t", "J"));


//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';


console.log(`${notTitleCase[0].toUpperCase()}${notTitleCase.slice(1,5)} ${notTitleCase[6].toUpperCase()}${notTitleCase.slice(7,10)}`);
//There has to be an easier way than how I just did that... 

console.log(notTitleCase.slice(0,5).replace("t", "T") + " " + notTitleCase.slice(6,10).replace("c", "C"));

// Which can also be written using template literal-- didn't seem to make a difference in the amount of work between these two

console.log(`${notTitleCase.slice(0,5).replace('t', 'T')} ${notTitleCase.slice(6,10).replace('c', 'C')}`);

//I'm curious to know how others went about doing it. I'm sure there are many ways. 