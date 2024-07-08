
let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function (){
      return Math.floor(11 * Math.random());
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function (){
      return Math.floor(11 * Math.random());
   }
};

let chimp = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function (){
      return Math.floor(11 * Math.random());
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function (){
      return Math.floor(11 * Math.random());
   }
};

let mossPiglet = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function (){
      return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, salamander,chimp, dog, mossPiglet];


// After you have created the other object literals, add the astronautID property to each one.



// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// console.log(crew);

function crewReports(arr){


   for (let i = 0; i < arr.length; i++) {
     
      console.log(`${crew[i].name} is a ${crew[i].species}. 
      They are ${crew[i].age} years old and ${crew[i].mass} kilograms. 
      Their astronaut ID is ${crew[i].astronautID}.`);
   }

   return; 
};

crewReports(crew);

// Start an animal race!

// let results = [];
// function fitnessTest(crew) {
//    let moveCount = 0;
   
//    for (let i = 0; i < crew.length, i++;) {
//      if(crew[i].move() < 20) {
//       moveCount++;
//       return results.push(`${crew[i].name} took ${moveCount} turns to take 20 steps`);
//      }

//    } 
// }
// console.log(fitnessTest(crew));

//Mine had just printed undefined.....


//---------------------------------Book's Example Solution-------------------------
function fitnessTest(candidates){
   let results = [], numSteps, turns;

   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;

    while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
    }

    results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
}

return results;
}