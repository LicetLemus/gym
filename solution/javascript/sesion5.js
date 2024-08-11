/* Moving Zeros To The End ------------------------------------------------ */

function moveZeros(arr) {
    let newArray = arr.filter((elemento) => elemento !== 0);
    const zeros = arr.filter((elemento) => elemento === 0);

    const order = newArray.concat(zeros);

    return order;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

/* Array diff ------------------------------------------------ */

function arrayDiff(a, b) {
    return a.filter(element => !b.includes(element));
}

console.log(arrayDiff([1,2], [1]))

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

/* ----------------------------------------------------------- */

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





