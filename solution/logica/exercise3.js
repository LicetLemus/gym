// write a Program that calculates the weighted average of a student based on 4 different grades
// entered by the user. In this case, The grades must be weighted as follows:
// Examen 1: 10%, Examen 2: 25%, Examen 3: 50%, Examen 4: 15%


function average(note1, note2, note3, note4) {
    return (note1*0.10 + note2*0.25 + note3*0.50 + note4*0.15)
}

console.log(average(5, 4.5, 4.5, 5))