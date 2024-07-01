let str = "blue";       //string we want to reverse
let reversed = "";      // the variable that will hold that new string  ACCUMULATOR VARIABLE

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
}

console.log(reversed);


let numbers = [2, 4, 6, 13, 22, 47, 98, 42, 56, 99 ];
let searchVal = 42;
let i = 0;

while (i < numbers.length) {
   if (numbers[i] === searchVal) {
      break;
   }
   i++;
}

if (i < numbers.length) {
   console.log("The value", searchVal, "was located at index", i);
} else {
   console.log("The value", searchVal, "is not in the array.");
}