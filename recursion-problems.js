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

// const stringSplitter = (str) => {

//   if(!str.length){
//     return "";
//   }
//   if(str[0] === " "){
//     // return '.' +  stringSplitter(str.slice(1))
//     return `${'.'}${stringSplitter(str.slice(1))}`
//   }
//   // console.log(stringSplitter(str.split(" ")))

// //  return str[0];
// //  return `${str[0]}/${stringSplitter(str.split(" "))}`;
// return `${str[0]}${stringSplitter(str.slice(1))}`
// }

// console.log(stringSplitter("hello hola bonjour"));

'use strict';
/**
 * Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.
 */

// const binaryRepresentation = num => {
//   // the first answer to the first modulo is the last number in the binary sequence

//   if (num === 0) return '';
 
//   const binaryNumber = num % 2;
//   // console.log(binaryNumber);

//   const divisibleWholeNumber = Math.floor(num/2);
//   // console.log(divisibleWholeNumber);
    
//   return `${binaryRepresentation(divisibleWholeNumber)} ${binaryNumber}`;
    
// };

// console.log(binaryRepresentation(3));

// const factorial = (num) => {

//   if(num === 0){
//     return "1"
//   }

//   // const factNum = factorial(num - 1);

//   // // console.log(factNum)
//   // return num * factNum;
// return num * factorial(num - 1);

// }

// console.log(factorial(5));

// const fibonacci = (originalSequence, nth) => {
//   // what's the nth number of the fibonacci sequence?
//   // if the length of the sequence = nth, stop the function and return that last number
  
//   // console.log('entered', originalSequence);
//   if (originalSequence.length === nth) {
//     return originalSequence[originalSequence.length - 1];
//   }
    
//   // let originalSequence = arr;
//   // console.log('OG 1: ', originalSequence);

//   const newNumber = originalSequence[originalSequence.length - 1] + originalSequence[originalSequence.length-2];
//   // console.log('new number:', newNumber);

//   // const updatedSequence = originalSequence.push(newNumber);
//   // console.log('new sequence:', newSequence);
  
//   originalSequence.push(newNumber);
//   // console.log('OG 2: ', originalSequence);

  
//   // if (nth === 0) return originalSequence.push(newNumber);

//   return fibonacci(originalSequence, nth);

//   // return [originalSequence, ...originalSequence.length - 1 + originalSequence.length - 2, fibonacci(nth - 1)];

// };

// console.log(fibonacci([0, 1], 5));