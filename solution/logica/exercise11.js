// 11. apply a 5% discount to the price of a product 

function discountPrice(price){
const discount = price * 0.05;

    if (price > 40) {
    return price + discount;
    } else return price;

} 

console.log(discountPrice(50));

/* 12. ----------------------------------- */

const qualificationStudent = (qualification) => {
    if (qualification >= 5) {
        return "congratulations, you passed the course";
    } else return "I'm sorry, you didn't pass the course";
}

console.log(qualificationStudent(6));

/* 13. ----------------------------------- */

function range(number) {
    const inferiorLimit = 20;
    const superiorLimit = 50;
    if (number >= inferiorLimit && number <= superiorLimit) {
        return "The number is within the range";
    } else return "The number is outside the range";
}

console.log(range(30));

/* 14. ----------------------------------- */

function range2(number) {
    const range1 = [2, 5];
    const range2 = [8, 12];

    if((number >= range1[0] && number <= range1[1]) || (number >= range2[0] && number <= range2[1])) {
        return "The number is within the range";
    } else return "The number is outside the range";
}

console.log(range2(15));


/* 15. ----------------------------------- */

function dates(user, password) {
    const userSalved = "Lady";
    const passwordSalved = 123456789;

    if(user === userSalved && password === passwordSalved) {
        return "Access permitted";
    } else return "Access denied";
}

console.log(dates("Lady", 1289)); 

/* 16. ----------------------------------- */

function isVocalOrConstant(letter) {
    const vocals = ["a", "e", "i", "o", "u"];
    return vocals.includes(letter) ? "The letter is a vocal" : "The letter is a constant";
}

console.log(isVocalOrConstant("a"));

/* 16. ----------------------------------- */

function isInsured(person) {
    return (
        person.civilStatus === "married" ||
        (person.civilStatus === "single" && person.gender === "man" && person.age > 30) ||
        (person.civilStatus === "single" && person.gender === "woman" && person.age > 25)
    );
}

  // example of use
    const person = {
        civilStatus: "single",
        gender: "man",
        age: 20
    };

    console.log(isInsured(person)); 


