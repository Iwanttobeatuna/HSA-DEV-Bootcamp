// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  return str.split("").reverse().join("");
}

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
  /* Pseudocode:
  Check for positive integer, return false if negative, else if 0, return 1, else factoralize
  */
 if (num < 0)
 {
   return -1
 }
 else if (num == 0)
 {
   return 1
 }
 else 
 return (num * factorial(num-1))

}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if (arr1.length === arr2.length)
  {
    const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]])
    return zip(arr1,arr2)
  }
  else
  {
    return -1
  }
}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  let unzip = require('unzip-array');
  return unzip(arr)
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
  if (num == 0)
  {
    return str
  }
  else if (num < str.length)
  {
    let ans =  str.substring(str.length - num) + str.substring(0, str.length - num) 
    return ans
  }
  else if (num > str.length)
  {
    let num2 = str.length - num
    let ans2 =  str.substring(str.length - num2) + str.substring(0, str.length - num2) 
    return ans2
  }
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {
  const d = new Date()
  var day = d.getDate()
  var mth = d.getMonth()
  var year = d.getFullYear()
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? `evening` : 'morning';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes;
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  return `Today's date is ${monthNames[mth]} ${day}th ${year}. It is ${strTime} in the ${ampm}.` 
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
