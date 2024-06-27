/* write a program that calculates the sine, cosine and tangent of an angle 
introduced by the user. 
*/

// 1. convert de grade to radians


function sineCosineTangent(degrees) {
const radians = degrees * Math.PI / 180;
const sine = Math.sin(radians);
const cosine = Math.cos(radians);
const tangent = Math.tan(radians);

return [sine, cosine, tangent];
}

console.log(sineCosineTangent(45));