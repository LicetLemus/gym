// of seconds to minutes and hours.

function convertSecondsToMinutesAndHours(seconds) {
    const minutes = seconds / 60;
    const hours = seconds / 3600;

    return [minutes, hours]
}

console.log(convertSecondsToMinutesAndHours(3670))


/* write a program that requests the user a number of three digits and calculates the sum of the digits of the number.
*/

function sumOfDigits(number) {
// convert the number to a string y split it into an array of characters
    const digits = number.toString().split("");
    
// Convert each character back to a number and sum them
const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
return sum

}

console.log(sumOfDigits(843));
