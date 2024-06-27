/* write a program that requests the user a temperature in Celsius and converts it to Fahrenheit
and Kelvin */

function convertTemperature(temperature) {
    const fahrenheit = (9/5)*temperature + 32;
    const kelvin = temperature + 273.15;
    return [fahrenheit, kelvin];
}

console.log(convertTemperature(10))