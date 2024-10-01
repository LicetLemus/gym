/* -------------------------------------------------------------------- 
1. Start with 2 int arrays, a and b, each length 2. 
Consider the sum of the values in each array. 
Return the array which has the largest sum. 
In event of a tie, return a. 
*/

function biggerTwo(a, b) {
  let addition1 = a.reduce((acumulado, actual) => acumulado + actual);
  let addition2 = b.reduce((acumulado, actual) => acumulado + actual);
  return addition1 >= addition2 ? a : b;
}

console.log(biggerTwo([1, 2], [3, 4]));

/*---------------------------------------------------------------------
2. You have a red lottery ticket showing ints a, b, and c, 
each of which is 0, 1, or 2. If they are all the value 2, 
the result is 10. Otherwise if they are all the same, the result is 5.
Otherwise so long as both b and c are different from a, 
the result is 1. Otherwise the result is 0. */

function redTicket(a, b, c) {
    if (a === 2 && b === 2 && c === 2) return 10;
    if (a === b && b === c) return 5;
    if (b !== a && c !== a) return 1;
    else return 0;
}

console.log(redTicket(2, 2, 1));

/*---------------------------------------------------------------------
3. Given a string of odd length, return the string length 3 from its middle, 
so "Candy" yields "and". The string length will be at least 3. */

function middleThree(str) {
    const middle = Math.floor(str.length / 2);
    let newString = "";

    newString += str.charAt(middle - 1);
    newString += str.charAt(middle);
    newString += str.charAt(middle + 1);

    return newString;
}

/* ------- */
function middleThree1(str) {
    let indexMiddle = (str.length - 1) / 2;
    console.log("index---", indexMiddle);

    return str[indexMiddle - 1] + str[indexMiddle] + str[indexMiddle + 1];
}

console.log(middleThree("Candy"));

/*---------------------------------------------------------------------
4. Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.*/

function abbrevName(name) {
    let newArray = name.split(" ");

    function letter(palabra) {
        return palabra[0];
    }

    newArray = newArray.map((elemento) => letter(elemento));

    return newArray.join().replace(/,/g, ".").toUpperCase();
}

console.log(abbrevName("Sam Harris"));

/* ------- */

function abbrevName1(name) {
    let newArray = name.split(" ");

    let letter = newArray.map((word) => word[0]);

    return letter.join(".");
}

/*-----------------------------------------------------------------
5. our goal is to create a function that removes the first and last 
characters of a string. You're given one parameter, 
the original string. You don't have to worry about strings 
with less than two characters. */

function removeChar(str) {
    return str.slice(1, -1);
}

console.log(removeChar("hello"));

/*----------------------------------------------------------------
6. that takes in 2 strings and transforms source into the target string.
For example
transform('car','see') === ["car", "sar", "ser", "see"]
transform('floor','brake') === ["floor", "bloor", "broor", "braor", "brakr", "brake"]
transform('kata','math') === ["kata", "mata", "math"]

/*------- */
function transform(source, target) {
    let lengthArray = target.length;

    let newArray = [source];

    for (let i = 0; i < lengthArray; i++) {
        if (source[i] !== target[i]) {
        let copyReplace = target.slice(0, i + 1) + source.slice(i + 1);
        newArray.push(copyReplace);
        }
    }

    return newArray;
}

console.log(transform("car", "see")); // ["car", "sar", "ser", "see"]

/*-----------------------------------------------------------------
7. You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
    question: 'Hi, could you please provide your firstName.' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
    question: 'Hi, could you please provide your language.' }
]
Notes:

At most only one of the values will be null / empty.
Preserve the order of the original list.
Return an empty array [] if there is no developer with missing details.
The input array will always be valid and formatted as in the example above.

*/

function askForMissingDetails(list) {
    return list.filter(function (a) {
        for (var key in a) {
        if (a[key] === null) {
            a["question"] = `Hi, could you please provide your ${key}.`;
            return a;
        }
        }
    });
}

/*----------------------------------------------------------------
8. We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). 
Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.
*/

function makeChocolate(small, big, goal){

    let smallChocolate = small * 1;
    let bigChocolate = big * 5;
    
    let sumKilo = smallChocolate + bigChocolate
    
    if (bigChocolate === goal) {
        return 0
    }
    
    if (sumKilo < goal) {
        return -1
    }
    
    if (bigChocolate < goal) {
        return goal - bigChocolate
    }
    
    if (bigChocolate > goal){ 
        let bigUsed = Math.floor(goal / 5);
        return goal - (bigUsed*5) 
    }

}


console.log(makeChocolate(4, 1, 9)); // 4
