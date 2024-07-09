/* -------------------------------------------------------------------- */
/* Start with 2 int arrays, a and b, each length 2. 
Consider the sum of the values in each array. 
Return the array which has the largest sum. 
In event of a tie, return a. */


function biggerTwo(a, b) {
    let additionA = 0;
    let additionB = 0;
    // suma a
    /*
    for (let i = 0; i < a.length; i++) {
        additionA = additionA + a[i]
    }
    // suma b
    for (let j = 0; j < b.length; j++) {
        additionB = additionB + b[j]
    }

    // comparacion de las sumas
    if (additionA > additionB) {
        return a;
    } 
    if (additionA === additionB) {
        return a;
    } else return b
     */

    let suma1 = a.reduce((acumulado, actual) => acumulado + actual)
    let suma2 = b.reduce((acumulado, actual) => acumulado + actual)

    return (suma1 >= suma2) ? a : b;

}

console.log(biggerTwo([1, 2], [3, 4]))

/*----------------------------------------------------------------*/
/* You have a red lottery ticket showing ints a, b, and c, 
each of which is 0, 1, or 2. If they are all the value 2, 
the result is 10. Otherwise if they are all the same, the result is 5.
Otherwise so long as both b and c are different from a, 
the result is 1. Otherwise the result is 0. */

function redTicket(a, b, c){
    if (a === 2 && b === 2 && c ===2) return 10
    if (a === b && b === c) return 5
    if (b !== a && c !== a) return 1
    else return 0
}

console.log(redTicket(2, 2, 1))

/*----------------------------------------------------------------*/

/* Given a string of odd length, return the string length 3 from its middle, 
so "Candy" yields "and". The string length will be at least 3. */

function middleThree(str) {
    const middle = Math.floor(str.length / 2);
    let newString = ''
    
    newString += str.charAt(middle-1);
    newString += str.charAt(middle);
    newString += str.charAt(middle+1);
    
    return newString;
}

/*-----------------------------------------------------------------*/

/* Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.*/

function abbrevName(name){

    let newArray = name.split(' ')
    
    function letter(palabra) {
        return palabra[0]
    }
    
    newArray = newArray.map((elemento) => letter(elemento))  
    
    return newArray.join().replace(/,/g , ".").toUpperCase()
    
}
/*-----------------------------------------------------------------*/
/* our goal is to create a function that removes the first and last 
characters of a string. You're given one parameter, 
the original string. You don't have to worry about strings 
with less than two characters. */

function removeChar(str){
    return str.slice(1, -1)
};

/*-----------------------------------------------------------------*/
function askForMissingDetails(list) {
    return list.filter(function(a){

        for(var key in a){
            if (a[key] === null){
            a['question'] = `Hi, could you please provide your ${key}.`;
            return a;
            }
        }

    });
}