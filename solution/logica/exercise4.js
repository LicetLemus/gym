// write a program that calculates the net salary of a worker in base the gross salary. The deductions
// that must be made are: 12% tax, 5% social security, 4.5% health insurance.

function salary(grossSalary) {
    const deductions = grossSalary * 0.12 + grossSalary * 0.05 + grossSalary * 0.045;
    const netSalary = grossSalary - deductions;
    return netSalary;
}

console.log(salary(2000));

// Get the gross salary from the user

const grossSalary = parseFloat(prompt("Enter the gross salary: "));

// Validate the input
if (isNaN(grossSalary) || grossSalary < 0) {
    console.log("Please enter a valid gross salary.");
} else {
  // Calculate the net salary
    const netSalary = salary(grossSalary);

  // Display the result
    console.log(`The net salary is: ${netSalary.toFixed(2)}`);
}
