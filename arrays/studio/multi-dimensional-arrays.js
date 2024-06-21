let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let cabinet = food.split(',').sort();
let cabinet1 = (equipment.split(',').sort());
let cabinet2 = (pets.split(',').sort());
let cabinet3 = (sleepAids.split(',').sort()); 

console.log(cabinet);
console.log(cabinet1);
console.log(cabinet2);
console.log(cabinet3);
   
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];
cargoHold.push(cabinet, cabinet1, cabinet2, cabinet3);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');
let cabinetNum = input.question('Please pick a cabinet number ranging from 0-3: ');
console.log(`You picked cabinet ${cabinetNum}`)

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.



/*      I am trying to figure out how to do a conditional. Technically the user's input needs to be between 
        0-3. I have it working for any number over 3, but I am trying to make sure the number isn't a negative 
        either. However, I can seem to get the Logical OR conditional to work properly.
if  (cabinetNum <= 3 || cabinetNum => 0) {
    console.log(cargoHold[cabinetNum]); */

if (cabinetNum <= 3) {
    //console.log(cargoHold[cabinetNum]);
    console.log(`${cargoHold[cabinetNum]}`)
}   else {
    console.log("ERROR: invalid number entered!");
}
/*     Also, did we want to use a template literal to have the return as a string and not showing as an array??
        It just didn't seem any easier than writing it with just the bracket notation-- unless I didn't do it as desired*/

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let cabinetNum1 = input.question('Please pick a cabinet number ranging from 0-3: ');
let itemNum = input.question('Please pick an item to look for in the cabinet: ');

console.log()


if (cargoHold[cabinetNum1].includes(itemNum)) {
    console.log(`Cabinet does contain ${itemNum}`);
}   else {
    console.log(`Cabinet does not contain ${itemNum}`);
}