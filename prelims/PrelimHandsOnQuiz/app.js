const { add, subtract, multiply, divide } = require('./calculation');

var hrs = 4;
var day = 6;
var rate = 300;
var hours_worked = multiply(hrs, day);

var gross = multiply(hours_worked, rate);
var tax = multiply(gross, 0.1);

var sss = 1200;
var pag_ibig = 300;
var phil_health = 400;

var total_deductions = add(add(sss, pag_ibig), add(tax, phil_health));

console.log('Gross Income: ' + gross);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig Fund: ' + pag_ibig);
console.log('Philhealth: ' + phil_health);
console.log('Total Deductions: ' + total_deductions);
console.log('Net Salary: ' + subtract(gross, total_deductions));
