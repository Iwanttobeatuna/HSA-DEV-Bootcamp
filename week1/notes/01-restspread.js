// Testing rest and spread

// Example 1: Resting object & arrays

const [a, b, ...Rest] = [1, 2, 3, 4, 5]

console.log(Rest)
// => [3, 4, 5]

// Example 2: Spread

const sum = (x,y,z) => {
    return x+y+z
}

const number = [1,2,3]

// console.log(number) => [1,2,3] ; but sum function said it needs to be individual arrays, hence spread is used.

console.log(...number)
// Ouput : 1,2,3
console.log(sum(...number))
// Output: 6

// Example 3: combining 2 const with spread

const chain1 = {numbers: 123}
const chain2 = {...chain1, statement: 'is integers'}
console.log(chain2)



