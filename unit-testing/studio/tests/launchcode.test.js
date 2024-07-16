// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("should have the organization property result as 'nonprofit'", function (){
    expect(launchcode.launchcode.organization).toBe("nonprofit");
    });

  test("should have the executive director return as 'Jeff'", function () {
    expect(launchcode.launchcode.executiveDirector).toBe("Jeff");
  })

  test("should have the percentageCoolEmployees return as a number type", function () {
    expect(launchcode.launchcode.percentageCoolEmployees).toEqual(100);
  })

  test("should return 'Web Development' at index 0 for programsOffered at LaunchCode", function () {
    expect(launchcode.launchcode.programsOffered.includes("Web Development")).toEqual(true);  
  })

  test("should return 'Data Analysis' at index 1 for programsOffered at LaunchCode", function (){
    expect(launchcode.launchcode.programsOffered.includes('Data Analysis')).toEqual(true);
  })

  test("should return 'Liftoff' at index 2 for programsOffered at LaunchCode", function () {
    expect(launchcode.launchcode.programsOffered.includes('Liftoff')).toEqual(true);
  })

  test("should return an array with 3 elements in it for programsOffered at LaunchCode", function() {
    expect(launchcode.launchcode.programsOffered.length).toEqual(3);
  });
  });

describe("The launchOutput function", function (){
  test("should return 'Launch' when passed a number that is ONLY divisble by 2", function (){
    expect(launchcode.launchcode.launchOutput(4)).toEqual('Launch!');
  });

  test("should return 'Code!' when passed a number that is ONLY divisble by 3", function (){
    expect(launchcode.launchcode.launchOutput(21)).toEqual('Code!');
  });

  test("should return 'Rocks!' when passed a number that is ONLY divisible by 5", function () {
    expect(launchcode.launchcode.launchOutput(25)).toEqual('Rocks!');
  });

  test("should return 'LaunchCode! when passed a number divisble by 2 and 3", function () {
    expect(launchcode.launchcode.launchOutput(6)).toEqual('LaunchCode!');
  });

  test("should return 'Code Rocks!' when passed a number that is divisible by 3 and 5", function () {
    expect(launchcode.launchcode.launchOutput(15)).toEqual('Code Rocks!');
  });

  test("should return 'Launch Rocks! when passed a number divisible by 2 and 5", function (){
    expect(launchcode.launchcode.launchOutput(20)).toEqual('Launch Rocks! (CRASH!!!!)');
  });

  test("should return 'LaunchCode Rocks!' when passed a number divisible by 2, 3 and 5", function () {
    expect(launchcode.launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
    });

  test("should return 'Rutabagas! That doesn't work.' when passed a number NOT divisible by 2, 3 or 5", function (){
    expect(launchcode.launchcode.launchOutput(17)).toEqual("Rutabagas! That doesn't work.");
  });

});
