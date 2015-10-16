/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

*/

function coinCounter (dollarValue) { // Initialize a JavaScript object to hold the coins var coinPurse = {};
var coinValues = { quarters: 4, dimes: 10, nickels: 20, pennies: 100 }
var coinPurse = {}
var cents = dollarValue * 100;
coinPurse.quarters = Math.floor(cents / 25);
cent= cents % 25;
coinPurse.dimes = Math.floor(cents / 10);
cents = cents % 10;
coinPurse.nickels = Math.floor(cents / 5)
cents = cents % 5;
coinPurse.pennies = Math.floor(cents); 
return coinPurse; }

console.log(coinCounter(50.24));