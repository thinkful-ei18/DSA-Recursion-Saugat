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

// function reverseString(str){
// if(str === ""){
//   return ""
// }

// return `${reverseString(str.slice(1))}${str[0]}`



// }
// console.log(reverseString("hello"));

// const nthTriangularNumber = sequence => {
//   how many dots are at the base of a triangle comprised of 45 dots in total?
//   dots = index number + 1 OR dots = current index value - previous index value
//   there are 9 base dots in a 45 dot triangle
//   sequence[1]-sequence[0] = dots in sequence[1]

//   return sequence;
//   sequence === [] ? [] : nthTriangularNumber();

//   sequence.slice(1);
//   [1 + nthTriangularNumber(sequence.slice(1))]
//   [(sequence[1] - sequence[0]), ...nthTriangularNumber(sequence.slice(1))]

//   return sequence.length === 1 ? [] : [(sequence[1] - sequence[0]), ...nthTriangularNumber(sequence.slice(1))];
  
// };

// console.log(nthTriangularNumber([1, 3, 6, 10, 15, 21, 28, 36, 45]));

const stringSplitter = (str) => {

  if(!str.length){
    return "";
  }
  if(str[0] === " "){
    // return '.' +  stringSplitter(str.slice(1))
    return `${'.'}${stringSplitter(str.slice(1))}`
  }
  // console.log(stringSplitter(str.split(" ")))

//  return str[0];
//  return `${str[0]}/${stringSplitter(str.split(" "))}`;
return `${str[0]}${stringSplitter(str.slice(1))}`
}

console.log(stringSplitter("hello hola bonjour"));

//