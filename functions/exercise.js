
console.log('make line');
function makeLine(size) {
    
    let line = (' ');
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}
console.log(makeLine(5));
console.log('----------------------------------------------------------------');

console.log('make square');
function makeSquare(size) {
    let square = '';
    for(let i = 0;i < size; i++) {
        square += (makeLine(size) + '\n');
    }
    return square;
}
console.log(makeSquare(5));
console.log('-----------------------------------------------------------------------------');

console.log('make rectangle');
function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }
console.log(makeRectangle(4,3));
console.log('------------------------------------------------------------------------------');


console.log('make downward stairs');
function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');   //how exactly is the stairs += makeLine(i+1) working here? 
    }
    return stairs.slice(0, -1);         //what is the -1 doing to help the function
  }
  console.log(makeDownwardStairs(5));
  console.log('---------------------------------------------------------------');

  console.log('adjusted downward stairs');
  function makeDownwardStairsAdjusted(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');   
      //the number in makeLine(i+_) is the starting point of the downward stairs. 
    }
    return stairs.slice(0, -4);   
    //in the (x, y), what is the y doing? it has to be a negative or it doesn't print.       
  }
  console.log(makeDownwardStairsAdjusted(5));
  console.log('------------------------------------------------------');

console.log('make spaced hashtag lines');
function makeSpaceLine(numSpaces, numChars) {
let spaces = ' ';
let spacedLine;
  for (let i = 0; i < numSpaces; i++) {
    spaces += " ";
    spacedLine = (spaces + makeLine(numChars) + spaces);
    
  }
  return spacedLine;
}
console.log(makeSpaceLine(4, 6));
console.log('------------------------------------------------');

console.log('make isosceles triangle');
function makeIsoscelesTriangle(height) {
let triangle = '';
  for (let i =0; i < height; i++ ) {
    triangle += (makeSpaceLine(height - i, 2*i + 1) + '\n');    
 } 
 return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(7));

//The book example has (height - i -1)  but when I do that the last line is undefined. 
//Is it because of -1?? When I do -3 it undefines that last 3 lines. Not to mention, 
//those equations did not come naturally to me and need some clarification on how we 
//arrived at them. 

console.log('------------------------------------------------');

// console.log('make a diamond');
// function makeDiamond(height) {
// let diamond = '';
// let diamondArray = [];
//   for (let i = 0; i < height, i++;) {
//     diamond += makeIsoscelesTriangle(height);
//     diamondArray.push(diamond).reverse();
//   }
//   return diamondArray;
// }
// console.log(makeDiamond(5));