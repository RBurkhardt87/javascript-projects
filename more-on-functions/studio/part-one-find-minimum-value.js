//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.
    
//     let newNums1 = nums1.sort((x,y) => x-y);
//     let newNums2 = nums2.sort((x,y) => x -y);
//     let newNums3 = nums3.sort((x,y) => x-y);

// console.log(nums1);
// console.log(nums2);
// console.log(nums3);

// NOW CREATE A FUNCTION THAT YOU CAN PASS ANY NUMBER ARRAY INTO:


// function sortedArray (num) {
//     return num.sort((x,y) => x-y);
// }
// console.log(sortedArray(nums1));
// console.log(sortedArray(nums2));
// console.log(sortedArray(nums3));

//____________________________________________________________

// function findMinValue(arr){
//     let min = arr[0];
//     for (i = 0; i < arr.length; i++){
//       if (arr[i] < min){
//         min = arr[i];
//       }
//     }
//     return min;
//   }
// console.log(findMinValue(nums1));


// function findMaxValue(arr) {                //create function
//     let max = arr[0];                       //setting max to be an index of an array element
//     for (i = 0; i < arr.length; i++) {      //set for loop statements (initialize, conditional and update)
//         if (arr[i] > max){                  //if the index is greater than the max, then reassign max to that 
//          max = arr[i];                      //number. As it loops it will continue to compare numbers until it hit 
//         }                                   //the greatest value in the array, at which point, max will be set and remain at that number
//     }
//     return max;
// }
// console.log(findMaxValue(nums1));



//----------------------------------------------------------------------------------------------------------------
//FOLLOWING ALONG WITH THE STUDIO VIDEO:

function findMinValue(arr) {
  let minimum = arr[0];                       //make minimum to actully store min value. Giving it a base line to compare against

  for (let i = 0; i < arr.length; i++) {      //we make a for loop to go through all the elements in the array. 
    if (arr[i] < minimum) {                   // we are saying that, as it goes through each #, if one is smaller than the minimun value
      minimum = arr[i];                        // then we will now reassign that number to the minimum
    }

  }

  return minimum;
}

console.log(findMinValue(nums1));             //Now we call the function and pass the first array through it to see if it worked.
                                              //What we are returning in the function is jus the minimum number, so that should print
console.log(findMinValue(nums2));
console.log(findMinValue(nums3));