/*
1. Dada uma string name, por exemplo "Bob", retorne uma saudação no formato "Hello Bob!"
    helloName('Bob') → "Hello Bob!"
    helloName('Alice') → "Hello Alice!"
    helloName('X') → "Hello X!"
*/

function helloName(string) {
  return `Hello ${string}!`;
}

const greeting = helloName("Licet");
console.log(greeting);

/*
2. Completa a função `intMax` que recebe três valores do tipo
int, a b c e devolve o maior.

    intMax(1, 2, 3) → 3
    intMax(1, 3, 2) → 3
    intMax(3, 2, 1) → 3
*/

function intMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(intMax(1, 2, 3));

//  Math.max - aceptar un número variable de argumentos y devolverá el mayor de ellos
function max(a, b, c) {
  //return Math.min(a, b, c);
  return Math.max(a, b, c);
}
console.log(max(5, 8, 3));

/* 
3. Given an array of ints, return true if 6 
appears as either the first or last element in the array. 
The array will be length 1 or more.
firstLast6([1, 2, 6]) → true


En JavaScript, la expresión nums[0] === 6 || nums[nums.length - 1] === 6 
devuelve automáticamente true o false según el resultado de la evaluación de la condición.
*/

function firstLast6(nums) {
    return nums[0] === 6 || nums[nums.length - 1] === 6
    /*
  if () {
    return true;
  } else {
    return false;
  }
    */
  
}

console.log(firstLast6([6, 5, 4]))

/*
Write a function that returns the string "something" joined with a space " " 
and the given argument a.
*/
function giveMeSomething(a) {
	return `something ${a}`
}

console.log(giveMeSomething("bueno"))
