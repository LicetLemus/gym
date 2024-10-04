
/*----------------------------------------------------------------
1. Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, 
are extra lucky. So if either value is a teen, just return 19.
*/

function teenSum(a, b) {
    if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
        return 19;
    } else {
        return a + b;
    }
}

console.log(teenSum(13, 5))

/*----------------------------------------------------------------
2. In this kata you will create a function that takes a list of non-negative integers 
and strings and returns a new list with the strings filtered out.
*/


function filter_list(l) {
    return l.filter(elemento => typeof elemento === "number" && elemento >= 0);
}

console.log(filter_list([1,2,'a','b']))

/*----------------------------------------------------------------
3. Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.
*/

function createPhoneNumber(numbers){
    let sliceOne = numbers.slice(0, 3).join('')
    let sliceOTwo = numbers.slice(3, 6).join('')
    let sliceThree = numbers.slice(6).join('')
    
    return `(${sliceOne}) ${sliceOTwo}-${sliceThree}`
    
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

/*----------------------------------------------------------------
4. Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.
*/

function moveZeros(arr) {
    let newArray = arr.filter((elemento) => elemento !== 0);
    const zeros = arr.filter((elemento) => elemento === 0);
    return newArray.concat(zeros);
}

/* ------ */

function moveZeros1(arr) {
    let zeros = [];
    let nonZeros = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else {
            nonZeros.push(arr[i]);
        }
    }
    return nonZeros.concat(zeros);
}

console.log(moveZeros1([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

/*----------------------------------------------------------------
5. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
*/

function arrayDiff(a, b) {
    return a.filter(element => !b.includes(element));
}

/* ------ */

function arrayDiff1(a, b) {
    let filtered = [];
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
        filtered.push(a[i]);
        }
    }
    return filtered;
}

console.log(arrayDiff1([1,2,3], [1,2]))

/* ------ */

function arrayDiff2(a, b) {
    let newArray = []
    
    a.forEach((element) => {
    if (!b.includes(element)) { 
        newArray.push(element);
    }
    });
    
    return newArray
}


/*----------------------------------------------------------------
6. A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/

var checkIfPangram = function(sentence) {
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let char of englishAlphabet) {
        if (!sentence.includes(char)) {
            return false; 
        }
    }
    return true;
};

var checkIfPangram1 = function(sentence) {
    let char_set = 'abcdefghijklmnopqrstuvwxyz';
    for (let a=0 ; a<char_set.length ; a++){
        if (sentence.indexOf(char_set[a])===-1){
            return false;
        }
    }
    return true;
};


/*----------------------------------------------------------------
7. Say that a "clump" in an array is a series of 2 or more adjacent elements 
of the same value. Return the number of clumps in the given array.
*/

function countClumps(nums){
    let count = 0
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]){
            count += 1
        
            while (nums[i] === nums[i + 1]) {
            i++;
            }
        }

    }
    return count
}

console.log(countClumps([1, 2, 2, 3, 4, 4, 4, 5]))



