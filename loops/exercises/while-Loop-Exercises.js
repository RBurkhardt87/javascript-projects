const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startFuel = " ";
let numAstronauts = " ";
let altitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startFuel = input.question('Please enter a starting fuel number within the range of 5000 to 30000: ');
while (startFuel < 5000 || startFuel > 30000) {
  startFuel = input.question('Invalid amount of fuel. Please enter a number that is between the range of 5000 and 30000: ');
} 
if (startFuel >= 5000 && startFuel <= 30000) {
  console.log(`Thank you! Our shuttle will start with a fuel level of: ${startFuel}`);
}


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numAstronauts = input.question('Please pick a number from 1-7 to determine how many astronauts will ride in our shuttle? ');
while (numAstronauts < 1 || numAstronauts > 7) {
  numAstronauts = input.question('Please try again. Pick between 1-7 to determine how many astronauts will ride on the shuttle: ');
}
if (numAstronauts >= 1 && numAstronauts <= 7) {
  console.log(`You have chosen ${numAstronauts} astronauts to ride in our shuttle!`);
}  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

// I inserted the solution check for the exercise since I was struggling. and I am not getting the correct answer with this either.
while (startFuel-100*numAstronauts >= 0) {
  altitude = altitude + 50;
  startFuel -= 100*numAstronauts;
  }


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitude} km.`);

if (altitude >= 2000) {
  console.log('Orbit achieved!');
} else {
  console.log('Failed to reach orbit.');
}



  