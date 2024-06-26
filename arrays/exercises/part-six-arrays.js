//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ['hydrogen', 'H', 1.008]
let element2 = ['helium', 'He', 4.003]
let element26 = ['iron', 'Fe', 55.85]

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [];

table.push(element1, element2, element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[1]);  //it printed the entire array (row) that was in the 1 index. If we were to have done console.log(table[2]); then [ 'iron', 'Fe', 55.85] would have printed

console.log(table[1][1]);   //it printed the element that was located in the (1,1) position. It was the element in the 1 position of the array that was in the 1 index.

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let threeArray = [
    [
        [1, 2, 3],
        [4, 5, 6],              // numbers multiplied by 1
        [7, 8, 9]
    ],
    [
        [2, 4, 6],
        [8, 10, 12],            // numbers multiplied by 2
        [14, 16, 18]
    ],
    [
        [3, 6, 9],
        [12, 15, 18],           // numbers multiplied by 3
        [21, 24, 27]
    ]
];

console.log(threeArray[0][2][2]);
console.log(threeArray[1][0][2]);
console.log(threeArray[2][0][0]);

