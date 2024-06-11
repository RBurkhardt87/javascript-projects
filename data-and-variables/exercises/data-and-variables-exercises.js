//Setting the variables and values from the chart
let spaceShuttle = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToTheMoonKm = 384400;
let milesPerKilometer = 0.621;

//Checking the data types of each variable
console.log(typeof spaceShuttle);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToTheMoonKm);
console.log(typeof milesPerKilometer);

//Calculations to Mars
let milesToMars = (distanceToMarsKm * milesPerKilometer);
let hoursToMars = (milesToMars / shuttleSpeedMph);
let daysToMars = (hoursToMars / 24);

//Printed results of Mars calculations
console.log(spaceShuttle + ' will take ' + daysToMars + ' days to reach Mars.');

//Calculations to Moon
let milesToMoon = (distanceToTheMoonKm * milesPerKilometer);
let hoursToMoon = (milesToMoon / shuttleSpeedMph);
let daysToMoon = (hoursToMoon / 24);

//Printed results of Moon calculations
console.log(spaceShuttle + ' will take ' + daysToMoon + ' days to reach the Moon.');