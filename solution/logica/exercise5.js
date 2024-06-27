/* write a program that requests the user the radius (R) of a circle and calculates the area (A) 
and the perimeter (P) of the circle in base of the radius. The formulas to calculate the area and 
perimeter of a circle are: A = π * R^2 and P = 2 * π * R
*/

function calculateCircle(radius) {
    const pi = 3.14159;
    const areaCircle = pi*(radius**2);
    const perimeterCircle = 2*pi*radius;

    return [areaCircle, perimeterCircle];
}

console.log(calculateCircle(5))

// get the radius from the user
const radius = parseFloat((prompt("Enter the radius of the circle: ")));

// validate the input
if (isNaN(radius) || radius < 0) {
    console.log("Please enter a valid radius.");
} else {
    const result = calculateCircle(radius);
    console.log(`The area of the circle is: ${result[0].toFixed(2)}`);
    console.log(`The perimeter of the circle is: ${result[1].toFixed(2)}`);
}
