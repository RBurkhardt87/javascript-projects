let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()

let getInitial = function(n) {
for (let i = 0; i < names.length; i++){
  return n[i];
}
};
let firstInitials = names.map(getInitial);

console.log(names);
console.log(firstInitials);



// let firstInitials = names.map(function (element){
//     // console.log(element[0]);
    
//     for (let i = 0; i < names.length; i++){
//     return element[i];
//     }
// });

// console.log(firstInitials);
