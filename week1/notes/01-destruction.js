const DEV = {
    year: 2021,
    dates: 
    {
        start: 'Jan4' ,
        end: 'Jan21' ,
    },
    address:
    {
        address1: "Somewhere" ,
        address2: "somehwere2" ,
    },
    random: {
        start: '123' ,
        end: '456' ,
    }
}

/* accessing single variable */
console.log(DEV.address)
/* Ouput : { address1: 'Somewhere', address2: 'somehwere2' } */

/* destructuring array without similar name (Ex: datas and address) */
const { dates: {start, end}, address: {address1,address2}} = DEV

console.log(start)
console.log(address2)
/* Ouput:  Jan4 ; somehwere2  */

/* destructuing array with similar name(Ex: dates and random) */
/* renaming arrays */
 const { dates: {start:datesStart , end: datesEnd}, random: {start: rstart , end: rend} } = DEV

 console.log(datesStart)
 console.log(rstart)

 /* Output: Jan4; 123 */

 /* in a unique sentence after renaming */
 console.log(`Well, something is something in ${datesStart} especially randomly random given number ${rstart}`)
 /* Ouput: Well, something is something in Jan4 especially randomly random given number 123 */

 const students = [{ name: "Peter", house: "Pfoho" },
{ name: "Charles", house: "Dunster" }]


// Destructure arrays too!
const [{ name: n1, house: h1 }, { name: n2, house: h2 }] = students

console.log(`${n1}’s house, ${h1}, is better than ${n2}’s, ${h2}!`) 

// => “Peter’s house, Pfoho, is better than Charles’s, Dunster!”
