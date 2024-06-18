//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.

console.log(dna);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

console.log(dna.trim());


//2) Change all of the letters in the dna string to UPPERCASE, then print the result.

console.log(dna.toUpperCase());

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

dna = dna.trim().toUpperCase();
console.log(dna);

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.

console.log(dnaTwo.replace("GCT", "AGG"));

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

if (dnaTwo.indexOf("CAT")) {
    console.log('CAT gene found');
}   else {
    console.log('CAT gene NOT found');
}
//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

let sliceDna = "TCG-TAC-GAC-TAC-";   // Was trying to determine where to make the slice
console.log(sliceDna.length);
console.log(dnaTwo.indexOf("CGT"));  //indexOf seems easier to use in the future.
console.log(dnaTwo.slice(16, 19));

//4) Use a template literal to print, "The DNA strand is ___ characters long."

strandLength = dnaTwo.length;
console.log(`The DNA strand is ${strandLength} characters Long.`);


//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
let dashes = ("------------------------------------------------------"); 
console.log(dashes);

/*Below I am just messing around with different ways to go about it. 
I wanted to try another way since I had to reference Example in the book to get started.*/

//You can use character segments and not just numbers for indexOf

let forFun;
//forFun = (`${dna.slice(4,7)}o`);    --- I had to borrow from example to get started with experimenting...
forFun = dnaTwo.slice(dnaTwo.indexOf('TAC'),dnaTwo.indexOf('-GAC')) + 'o';
console.log(forFun.toLowerCase());

let forFun2;
forFun2 = dnaTwo.slice(dnaTwo.indexOf('CAT'), dnaTwo.indexOf('-AGA'));
//forFun2 = (`${dnaTwo.slice(dnaTwo.indexOf('CAT'), dnaTwo.indexOf('-AGA'))}`);  
console.log(forFun2.toLowerCase()); 

console.log("\nThis is concantentation lower case: " + forFun.toLowerCase() + " " + forFun2.toLowerCase());  // concantention

console.log(`
This is template Literal lowercase: ${forFun.toLowerCase()} ${forFun2.toLowerCase()}
`); // template literal

//I guess I can also reassign the variables before printing...

forFun = forFun.toLowerCase();
forFun2 = forFun2.toLowerCase();
console.log(`${forFun} ${forFun2}`);


console.log(dashes);

// Here is the example from the book... 


console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);
console.log("\nExperimenting with the book's example:");

/* I want to try to break it down. 
I understand how it was done, except for the dna.indexOf('CAT)+3.
I wouldn't have thought to do that to so... let's try and find out how it works...*/

// dna = "TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT"
console.log(dna.indexOf('TAC')); //returns 4 
console.log(dna.indexOf('TAC')+3); //returns 7
/* (4,7) gives us our intergers for .slice()
Then .toLowerCase() is used.
And then adding a lowercase 'o' */

console.log(`${dna.slice(4,7).toLowerCase()}o`);        //Book Example used numerical/interger values using .slice()

console.log(`${dna.slice(dna.indexOf('TAC'), dna.indexOf('TAC') + 3).toLowerCase()}o`);     //Here is it done using characters and .indexOf()

console.log(dashes);

console.log(`${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);  //Book Example used character segments and .indexOf()

console.log(dna.indexOf('CAT'));    //returns 40
console.log(dna.indexOf('CAT')+3);  //returns 43
// (40,43) gives us our integers for .slice()

console.log(`${dna.slice(40,43).toLowerCase()}`);   //Here is is done with numerical/integers and .slice()

// And here they are pasted together in a different way...

console.log(`${dna.slice(dna.indexOf('TAC'), dna.indexOf('TAC') + 3).toLowerCase()}o ${dna.slice(40,43).toLowerCase()}`);

