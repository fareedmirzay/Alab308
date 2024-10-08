// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

console.log( `The numbers add up to 50:${isSum50}`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

const oddNumbersCount = [n1, n2, n3, n4].filter(num => num % 2 !==0.).length;
const MustHaveLeastTwoOdd = oddNumbersCount >= 2;
console.log(`There are atleast two odd numbers here: ${MustHaveLeastTwoOdd}`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const allNumbersLessThan25 = [n1, n2, n3, n4].every(num => num <= 25);
console.log(`All the numbers are 25 and/or less than 25: ${allNumbersLessThan25}`);



// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

const AllTheNumbermustbeUnique = new Set([n1, n2, n3, n4]).size === 4;
console.log(`All the numbers are unique indeed: ${AllTheNumbermustbeUnique}`);


// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Additions Checks for this assignment!!!!!!!!!!!!!!



//1. Check to see if all numbers are divisible by 5
const allNumberDivisibleBy5 = [n1, n2, n3].every(num => num % 5 === 0);
console.log(`All numbers are divisible by 5:${allNumberDivisibleBy5}`);


//2. // Check if the first number is larger than the last
const isFirstLargerThanLast = n1 > n4;
console.log(`The first number is larger than the last: ${isFirstLargerThanLast}`);


// //3. Arithmetic chain
const result = ((n2 - n1) * n3) % n4;
console.log(`The Arithmentic chain results are as follows: ${result}`);


//4. Change the way isOver25 calculates to avoid the NOT operator


const allNumbersUnderOrEqualsLessThan25 = [n1, n2, n3, n4].every(num => num <= 25);
console.log(`All the numbers are 25 or less, which is without using NOT: ${allNumbersUnderOrEqualsLessThan25}`);



