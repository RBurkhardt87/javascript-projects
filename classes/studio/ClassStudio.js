//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addingScores(score) {
        this.scores.push(score);
    }

    average() {
        let sum = 0;
        for (let i = 0; i <this.scores.length; i++) {
            sum += this.scores[i];
        }
        let avg = sum/this.scores.length;
        return Math.round(avg*10)/10;
    }

    status() {
        let status;
        let avgScore = this.average();
            if(avgScore >= 90) {
                return status = "Accepted";
            }
            if(avgScore >= 80) {
                return status = "Reserved";
            }
            if(avgScore >= 70) {
                return status = "Probationary";
            }   else {
                return status = "Rejected";
            }
    }

    // status() {
    //     if (this.average() >= 90) {
    //         return 'Accepted';
    //     }
    //     if (this.average() >= 80) {
    //         return 'Reserved';
    //     }
    //     if (this.average() >= 70) {
    //         return 'Probationary';
    //     }   else {
    //         return 'Rejected';
    //     }
    // }
    report () {
    return console.log(`${this.name} earned an average test score of ${this.average()} and has a status of ${this.status()}`);
}

//HOW CAN I CREATE A LOOP FOR THIS.....

increaseAverage() {
let count = 0;
for (let i =0; i >101; i++){
   
    if (this.average() < 80) {
        this.scores.push(100);
        count += 1;
    }
    
    }
    return count;
}

};

// Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90.
// Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
// Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62.

let BubbaBear = new CrewCandidate('Bubba Bear' , 135, [88, 85, 90]);
let MerryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let GladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(BubbaBear);
console.log(MerryMaltese);
console.log(GladGator);
console.log('--------------------------------------------------------------------------------------------');
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

// '___ earned an average test score of ___% and has a status of ___.'

//  CAN YOU LOOP OVER A CLASS? CAN YOU ACCESS THE OBJECTS THAT ARE DEFINED AS THAT CLASS? YOU CAN PRINT AN OBJECT FILLED WITH OTHER OBJECTS, SO CAN YOU DO SOMETHING SIMILAR WITH A CLASS. WHEN I GO TO CONSOLE.LOG THE CLASS IT JUST ACTS LIKE A FUNCTION 


// function statReport(candidates) {
// for (properties in CrewCandidate) {
//     let candidates = CrewCandidate[properties];
//     for (let i = 0; i < candidates.length; i++) {
//       console.log(CrewCandidate[i]);
//      return console.log(`${candidates[i].name} earned an average test score of ${candidates[i].average()} and has a status of ${candidates[i].status()}`);    
//     }
//     }   
   
// };


console.log('-------------------------------------------------------------------------------------------');
BubbaBear.report();
MerryMaltese.report();
GladGator.report();
console.log('---------------------------------------------------------------------------------------------');
console.log(GladGator.increaseAverage());


console.log(CrewCandidate);
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

// Use the three methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
