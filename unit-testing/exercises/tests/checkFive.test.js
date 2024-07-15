const checkFive = require('../checkFive.js');


describe("the checkFive function", function (){
    test('should return number is less than 5', function () {
        let output = checkFive(2);
        expect(output).toEqual('2 is less than 5.');
    });

    test('should return number is greater than 5', function (){
        let output1 = checkFive(7);
        expect(output1).toEqual('7 is greater than 5.');
    })

    test('should return number is equal to 5', function (){
        let output2 = checkFive(5);
        expect(output2).toEqual('5 is equal to 5.');
    })


});