

// Code your selectRandomEntry function here:

function selectRandomEntry(array){
let index = Math.floor(Math.random()*array.length);
  return array[index];
}


let idNumbers = [291, 414, 503, 599, 796, 890];
let newArray = []; 

  while(newArray.length < 3) {
  let number = selectRandomEntry(idNumbers);
    
  if (!newArray.includes(number)) {
    newArray.push(number); 
  }

  }

console.log(newArray);

// Code your buildCrewArray function here:


function buildCrew(ids, candidates) {
  let crew = [];

  // ----------This is done with single loop----------------//
  // for(let i = 0; i < candidates.length; i++) {
  //     if (ids.includes(candidates[i].astronautID)) {                                              
  //    crew.push(candidates[i]);
  //    }
  //  }
  


  //-----------Now let's try a nested loop-----------------//
    for (let i = 0; i < ids.length; i++) {                    //outside loop is going over the ids. For each element a inner loop will run
      for (let j = 0; j < candidates.length; j++) {           // This is what we did during studio... it didn't work for me because i didn't use j++ 
        if (candidates[j].astronautID === ids[i]) {           // I automatically did i++. Once changed, the program ran.
          crew.push(candidates[j]);
        }
      }
    }
   return crew;
}


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements
let finalCrew = buildCrew(newArray, animals);
console.log(`${finalCrew[0].name}, ${finalCrew[1].name}, and ${finalCrew[2].name} are going to space!`);

