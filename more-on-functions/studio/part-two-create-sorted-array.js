

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
// console.log(findMinValue(nums1));


//Your function here...

// let sortedArray = [];

// function transferArrays(arr) {  

  
//   for (let i = 0; i < arr.length; i++) {      //should loop through the whole array
//       let minNum = findMinValue(arr);         //finds the smallest integer and stores it in minNum
//       // arr.slice(minNum);                     //should remove the smallest integer from original array
//                                                       //when I try it like below output changes but still doesn't work right
//       sortedArray.push(arr.splice(minNum));               //would think it would push the minNum to the array
//                                               //I WOULD THINK THAT THIS WOULD REPEAT UNTIL THE LOOP HAD GONE THROUGH THE ENTIRE ARRAY BEING PASSED INTO THE FUNCITON
//                                            //HOWEVER, THE RESULTS ARE CONFUSING ME & I'M QUESTIONING WHAT I KNOW ABOUT LOOPS. 
      
//     }

//       return sortedArray;                        //return the sortedArray with the integers in numerical or for the array being passed thru
// }

  // console.log(transferArrays(nums1));         // [2,5] So first two smallest
  // console.log(nums1);                         // [5,10] duplicated the 5 and what happened to the 42?
  // console.log(transferArrays(nums2));         // [-44] it is the smallest integer, but where's the rest?
  // console.log(nums2);                         // [] coming up empty. All the integers went where?
  // console.log(transferArrays(nums1));            // [-3.3, 4, 4, 4] why duplicates of the 4? does it have something to do with 4.4 & 4?
  // console.log(nums3);                            // [200, 5, 4, 10]

//I SEE NO RHYME OR REASON WHY THESE ARE PRINTING OUT THE WAY THE ARE. I CAN'T SEE A PATTERN TO IT-- SO NOT SURE HOW TO FIX IT. 



//   while (arr.length > 0) {
//     newString += arr[0];
//     arr.shift();
//     sortedArray.push(newString);
//   } 
// }
// console.log(transferArrays(nums1));



// let sortedArray = [];

// function transferArrays(arr) {  

//   for (let i = 0; i <arr.length; i++) {
    
    // if (arr[i] < arr.length) {
    // minNum = findMinValue(arr);
    // arr.slice(minNum);
    // sortedArray.push(minNum);
    // } else {
    //   sortedArray.push(findMinValue(arr));
    // }
    
    
//   }
//   return sortedArray
// }
// console.log(transferArrays(nums1));




/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:

//----------------------------------------------------------------------------------------------------------------------
//-------------------------------------FOLLOWING WITH THE STUDIO VIDEO TO HELP------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

//TIP: A while loop is better because the array has an unknow length. 

// function sortArray(unsortedArray) {     //Step 2                        //we want to sort an unsorted array, so, we name function sortArray and we will be passing a unsorted Array into it
//   let newArray = [];                    //Step 1                        // we want to return the unsorted Array into a new array that is sorted, so we will declare a new array to store it in by
//                                                                         // initializing it to an empty array [];      and our function will be returning that new array.
//   while (unsortedArray.length !==0 ) {                                  // if it has a length any more than zero, it will run. if it had a lenght of 0, that means it is an empty array. 
//     let smallestValue = findMinValue(unsortedArray);                    // smallestValue is going to store the smallest number of the unsorted array. so we set it to the function to find the number
//     newArray.push(smallestValue);                                       //we want to add the number to our new array. so we push it into our newArray, we begins to fill the empty array.
//     unsortedArray.splice(unsortedArray.indexOf(smallestValue), 1);      // now we want to remove that smallest number from the old unsorted array. First, we take the unsorted array and use splice on it.
//                                                                         // we don't know what the number is so we will use the unsortedArray.indexOf (smallestValue), to find the index of that number.
//                                                                         //Last, we want to take out just one number, so we follow it with a 1 inside the (). This will then remove the smallest number that was just stored in newArray
//                                                                         //this process (loop) will continue until the old unsortedArray has 0 length (empty).
//   }
//   return newArray;

// }
// console.log(sortArray(nums1));
// console.log(sortArray(nums2));
// console.log(sortArray(nums3));



//CHALLENGES USING FOR LOOP:
//WE DONT KNOW HOW LONG LENGTH IS GOING TO BE OF THE ARRAY, WE ARE CONSTANTLY CHANGING THE LENGTH OF THE UNSORTED ARRAY. WE ARE ALWAYS TAKING SOMETHING OUT. AND IT 
//ISN'T UNIFORMALLY CHANGING-- BY REMOVING THE FIRST OR LAST ELEMENTS OF THE ARRAY. THE SMALLEST NUMBER IS GOING TO BE ANYWHERE IN THE ARRAY, CONSTANTLY CHANGING. A FOR LOOP
//USES i++ WHICH REITERATES TO THE NEXT INDEX, BUT BECAUSE WE DON'T KNOW WHERE THAT SMALLEST NUMBER WILL BE REMOVED THE INDEX OF ELEMENTS IN CONSTANTLY CHANGING.  


//this correctly finds the minvalue and pushes it but we are losing half the numbers in the array. So, how can we capture all the numbers in the array, while also taking numbers out...
// function sortArray(unsortedArray) {
  
//   for(let i = 0; i < unsortedArray.length; i++ ) {
//     let smallestValue = findMinValue(unsortedArray);
//     newArray.push(smallestValue);
//     unsortedArray.splice(unsortedArray.indexOf(smallestValue), 1);
//   }


//   return newArray;
// }

//We are actually going to start at the end of the array and work our way back to the first by decrementing by 1 instead if incrementing...

function sortArray(unsortedArray) {
  let newArray = [];                                                              //we still need to declare and initialize a new array to store.


  for(let i = unsortedArray.length -1; i >= 0; i-- ) {                            //So, we set i to the length of the array -1. The -1 is because lenth starts with 1 and index starts with 0. 
    let smallestValue = findMinValue(unsortedArray);                              // to get to the last elements index, you take length -1. 
    newArray.push(smallestValue);                                                 // Next, the condition, we want the loop to run as long as i is >= 0. if it was less than zero, array would be empty
    unsortedArray.splice(unsortedArray.indexOf(smallestValue), 1);                //if you didn't do = to zero, then it wont get to the first element of the array...  i-- decrements by 1.
  }


  return newArray;
}
console.log(sortArray(nums1));
console.log(sortArray(nums2));
console.log(sortArray(nums3));