// 1. You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20


function Add(arr) {
    let sum = 0

    arr.forEach(num => {
        sum = num + sum
    });
    return sum
}

const result1 = Add([1, 3, 4, -3])
console.log(result1)


/*
2. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
/*
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

let count = 0;
let add = 0;

for (let i = 0; i < input.length; i++){
    if(input[i] > 0) {
        count++
    }
    if (input[i] < 0) {
        add = add + input[i]
    }
}
console.log(count, add)
*/

const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

function countPosAndSumNegatives(array) {
    let countPositive = 0;
    let addNegative = 0;

    array.forEach(element => {
        if(element > 0) {
            countPositive++;
        } 
        if (element < 0) {
            addNegative = addNegative + element;
        }
    });

    return[countPositive, addNegative]
}

console.log(countPosAndSumNegatives(elements))


/*
currentvalue, toma cada valor del array en cada iteración, en este caso son los numeros 
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
*/

function countPosAndSumNegative(array) {
    return array.reduce(([countPositive, addNegative], number) => {
        if (number > 0) {
            countPositive++;
        } else if (number < 0) {
            addNegative += number;
        }
        return [countPositive,addNegative]
    },
    [0,0]
);
}

console.log(countPosAndSumNegative(elements))
