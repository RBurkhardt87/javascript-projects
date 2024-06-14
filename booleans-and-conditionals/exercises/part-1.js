// Declare and initialize the variables for exercise 1 here:

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = 	spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000

// BEFORE running the code, predict what will be printed to the console by the following statements:
// engine indicator light code block: I predit that "engines are off" will be printed
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
//crew status code block
if (crewStatus === true) {
   console.log("Crew Ready");
}  else if (crewStatus === false) {
   console.log('Crew Not Ready');
}
//computer status code block
if (computerStatusCode === 200) {
   console.log('Please stand by. Computer is rebooting.');
}  else if (computerStatusCode === 400) {
   console.log('Success! Computer online.');
}  else {
   console.log('ALERT: Computer offline!');
}
// shuttle speed code block
if (shuttleSpeed > 17500) {
   console.log('ALERT: Escape velocity reached!');
}  else if (shuttleSpeed < 8000) {
   console.log('ALERT: Cannot maintain orbit!');
}  else {
   console.log('Stable speed');
}
/*Predict: Yes both will print the same. The first code has all true operands, so the first expression will run.
The second code has all operands as false, therefore the second expression will execute.*/
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}
//Order conditions correctly and do a check based on table
let fuelLevel;
let engineTemperature;

fuelLevel = 18000;
engineTemperature = 2500;
engineIndicatorLight = !'red blinking';

 if (fuelLevel <1000 || engineTemperature >3500 || engineIndicatorLight === 'red blinking') {
    console.log('ENGINE FAILURE IMMINENT!');
 }  else if (fuelLevel <= 5000 || engineTemperature >2500) {
    console.log('Check fuel Level. Engines running hot.');
 }  else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log('Full tank. Engines good.');
 }  else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log('Fuel Level above 50%. Engines good.');
 }  else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log('Fuel Level above 25%. Engines good.');
 }  else {
    console.log('Fuel and engine status pending...');
 }

 //Override command code
 let commandOverride = true;

 if (fuelLevel >20000 && engineIndicatorLight !== "red blinking" || commandOverride === true) {
   console.log('Cleared to launch!');
 } else {
   console.log('Launch scrubbed!');
 }