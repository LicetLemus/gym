/* 1. In a certain language, KINEMARTOPHOBIA is written as KNIEAMROTPOHBAI.
Based on this pattern, HILLARIOUS would be written as HIALRLIOSU.?*/

// HLILRAIUOS

/*2.Given two temperatures, return true if one is less than 0 and the other 
is greater than 100.  */

function temperatures(a, b) {
  return (a < 0 && b > 100) || (b < 0 && a > 100);
}

console.log(temperatures(120, 2));

/*2.Given 2 strings, a and b, return a string of the form short+long+short,
with the shorter string on the outside and the longer string on the inside. 
The strings will not be the same length, but they may be empty (length 0).*/
/*
The ternary operator ? : evaluates the condition a.length < b.length. 
If the condition is true, it returns a + b + a; otherwise, it returns b + a + b.. */

function strings(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

/* 3. Given an array of ints length 3, return a new array with the elements in reverse order,
so {1, 2, 3} becomes {3, 2, 1}. */

// forma 1 con  un for

function reverse3(array) {
  let reverseArray = [];

  for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
    reverseArray[j] = array[i];
  }

  return reverseArray;
}

console.log(reverse3([1, 2, 3]));

// form 2 con  un reverse(): This method reverses the elements of the array in place,
// meaning that the original array is modified.
function reverse1(array) {
  return array.reverse();
}

console.log(reverse1([4, 5, 6]));

/* 4. Given an array of ints length 3, return a new array with the elements in reverse order,
so {1, 2, 3} becomes {3, 2, 1}. */
// .trim() removes whitespace at the beginning and end of a string.
// .replace() replaces whitespace in this case with an empty string.
function noSpace(string) {
  return string.trim().replace(/\s/g, "");
}
const result = noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");
console.log(result);

/* 4. Given an array of ints length 3, return a new array with the elements in reverse order,
so {1, 2, 3} becomes {3, 2, 1}. */

function countSameEnds(str) {
  function hasSameFirstAndLastLetter(word) {
    word = word.toLowerCase();
    if (word.length < 2) {
      return false;
    }
    let firstChar = word.charAt(0);
    let lastChar = word.charAt(word.length - 1);
    return firstChar === lastChar;
  }

  let words = str.split(" ").map((word) => word.replace(/[^\w]/g, ""));
  let count = 0;

  for (let word of words) {
    if (hasSameFirstAndLastLetter(word)) {
      count++;
    }
  }
  return count;
}

// codigo refactorizado
function countSameEnds1(str) {
  const words = str
    .split(/\s+/)
    .map((word) => word.replace(/[^\w]/g, ""))
    .filter((word) => word.length >= 2);

  const count = words.filter((word) => {
    const lowerWord = word.toLowerCase();
    return lowerWord.charAt(0) === lowerWord.charAt(lowerWord.length - 1);
  }).length;

  return count;
}

/* 5. A group of friends have decided to start a secret society. 
The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function that takes in an array of names and returns the name of the secret society. */


function societyName(name) {
    let society = name.map(word => word.charAt(0));
    return society
}

console.log(societyName(["Harry", "Newt", "Luna", "Cho"]))