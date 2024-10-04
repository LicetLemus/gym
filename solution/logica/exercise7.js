/* write a program that requests the user the three coefficients (a,b,c) of a equation of a second degree 
defined as ax^2 + bx + c = 0 and calculates the roots of the equation. The formulas to calculate the roots
*/


function rootsOfEquation(a, b, c) {
    const discriminant = b**2 - 4*a*c;
    const root1 = (-b + Math.sqrt(discriminant))/(2*a);
    const root2 = (-b - Math.sqrt(discriminant))/(2*a);

    return [root1, root2];
}

const a = 1;
const b = 5;
const c = 6;

const roots = rootsOfEquation(a, b, c);
console.log("Roots:", roots);