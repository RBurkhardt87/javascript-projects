let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split());
console.log('\n');      //leaving the parenthesis empty didn't do anything to the array.
console.log(str.split('e'));
console.log('\n');      //it removed all the e's and immediately began (replaced e) with a new string that lasted until the next was found.
console.log(str.split(' '));
console.log('\n');      //every space marked a new string, which again lasted until the next space. 
console.log(str.split(''));
console.log('\n');      //the empty quotes broke each letter/character into a string of it's own.

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());
console.log('\n');      //it removed the quotes around each element and all the spaces inside the array. Commas were not replaced by anything.
console.log(arr.join('a'));
console.log('\n');      //it removed quotes. Commas were replaced with a's that join the elements together.
console.log(arr.join(' '));
console.log('\n');      // it removed quotes. Commas were replaced by spaces that "joined" the elements together. 
console.log(arr.join(''));
console.log('\n');      // it removed quotes. Commas were replaced by nothing (an empty'' string). So all the elements were joined together without anything inbetween.

//3) Do split or join change the original string/array?

console.log(str);
console.log(arr);
//No they do not change the original string/array

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(','));

console.log(cargoHold.split(',').sort().join(', '));