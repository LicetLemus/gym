
function countBill(amount) {
    // define a value with example of 898 euros
    // divide the amount by 898 euros and biggest bill
    // successively divide the amount by the biggest bill
    // returns the remaining amount
    // define a variable for store the amount of bills
    // define a const for store the amount remaining

    let amountRemaining = 0;
    let bills500 = 0;
    let bills200 = 0;
    let bills100 = 0;
    let bills50 = 0;
    let bills20 = 0;
    let bills10 = 0;
    let bills5 = 0;
    let coins1 = 0;

    if (amount >= 500){
        bills500 = Math.floor(amount / 500);
        amountRemaining = amount - (500*bills500);
    }
    if (amountRemaining >= 200){
        bills200 = Math.floor(amountRemaining / 200);
        amountRemaining = amountRemaining - (200*bills200);
    }
    if (amountRemaining >= 100){
        bills100 = Math.floor(amountRemaining / 100);
        amountRemaining = amountRemaining - (100*bills100);
    }
    if (amountRemaining >= 50){
        bills50 = Math.floor(amountRemaining / 50);
        amountRemaining = amountRemaining - (50*bills50);
    }
    if (amountRemaining >= 20){
        bills20 = Math.floor(amountRemaining / 20);
        amountRemaining = amountRemaining - (20*bills20);
    }
    if (amountRemaining >= 10){
        bills10 = Math.floor(amountRemaining / 10);
        amountRemaining = amountRemaining - (10*bills10);
    }
    if (amountRemaining >= 5){
        bills5 = Math.floor(amountRemaining / 5);
        amountRemaining = amountRemaining - (5*bills5);
    }
    if (amountRemaining >= 1){
        coins1 = Math.floor(amountRemaining / 1);
        amountRemaining = amountRemaining - (1*coins1);
    }

    return { bills500, bills200, bills100, bills50, bills20, bills10, bills5, coins1 };
}

console.log(countBill(989))

/*_-------------------------------------- chat IA*/
function countBill1(amount) {
    const bills = [500, 200, 100, 50, 20, 10, 5, 1];
    const counts = {};

    let amountRemaining = amount;

    for (const bill of bills) {
        counts[`bills${bill}`] = Math.floor(amountRemaining / bill);
        amountRemaining = amountRemaining % bill;
    }

    return counts;
}

console.log(countBill1(789));
