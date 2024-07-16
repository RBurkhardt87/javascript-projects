const tests = require('../RPS.js');

describe("the whoWon function", function () {
    test("should return 'TIE!' if players pick the same item", function (){
        // let output = tests.whoWon('rock', 'rock');
        // expect(output).toEqual('TIE!');
        expect(tests.whoWon('rock', 'rock'));
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = tests.whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = tests.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = 'scissors' & P2 = 'rock'", function (){
        expect(tests.whoWon('scissors', 'rock')).toEqual('Player 2 wins!');
    });

    test("returns 'Invalid choice.' if P1 or P2 is not rock, paper or scissors", function () {
        expect(tests.whoWon('pickle', 'rock')).toEqual('Invalid choice.');
    })
  


});