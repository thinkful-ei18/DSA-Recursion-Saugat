// 'use strict';

// function countSheep(sheep){
//   if(sheep === 0){
//     return;
//   }
// console.log(`${sheep} - Another sheep jump over the fence`)

//   countSheep(sheep - 1)
// }


// function arrDouble(arr){
// if(!arr.length){
//   return [];
// }

// arrDouble(arr.splice(1))

// }

// arrDouble([1,2,3])

function reverseString(str){
if(str === ""){
  return ""
}

return `${reverseString(str.slice(1))}${str[0]}`



}
console.log(reverseString("hello"));
