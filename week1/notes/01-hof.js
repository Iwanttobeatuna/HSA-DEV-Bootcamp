// Higher Order Functions

// Example 1: forEach
const names = ["Bliss", "Dasha", "Jada", "Diego"]

names.forEach(name => console.log(name))
/*
Output:
Bliss
Dasha
Jada
Diego
*/

// Example2: filter
const startsWithD = names.filter(name => name.startsWith("D"))

console.log(startsWithD)
// => ["Dasha", "Diego"]

console.log(names)
// => ["Bliss", "Dasha", "Jada", "Diego"]

// Example 3: map
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
const fullnames = 
persons.map(({firstname, lastname}) => `${firstname} ${lastname}`)

console.log(fullnames)
// => [ 'Malcom Reynolds', 'Kaylee Frye', 'Jayne Cobb' ]

