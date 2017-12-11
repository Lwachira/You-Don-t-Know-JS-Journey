/* var amount = 99.99

amount = amount * 2;

console.log(amount);

amount = "$" + String( amount );

console.log( amount );	 */


/* const TAX_RATE = 0.98;
var  amount = 99.99;

{
    amount = amount * 2;
    console.log(amount);
}

if(amount > 10){ // <-- block attached to `if`
    amount = amount * 2;
    console.log("New amount: " +amount);
}
 */


/*  var bankBalance = 302.13;
 var amount = 99.99;

 if(amount < bankBalance){
     console.log("I want to buy this phone");
 } */
/* 
 const ACCESSORY_PRICE = 9.99;

 var bank_balance = 302.13;
 var amount = 99.99;

 amount = amount * 2;

 if(amount < bank_balance){
     console.log("I'll take the accessory");
     amount = amount + ACCESSORY_PRICE;
 }
else{
    console.log("No,thanks");
}
 */

const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 200;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amt) {

    return amt * TAX_RATE;

}


function formatAmount(amt) {
    return "$" + amt.toFixed(2);
    
}

while (amount < bank_balance) {
    amount += PHONE_PRICE;

    if (amount < SPENDING_THRESHOLD) {
        amount += ACCESSORY_PRICE;
        
    }
}

amount += calculateTax(amount);

console.log("Your purchase: " + formatAmount(amount));

if (amount > bank_balance) {
    console.log("You can't afford this purchase. :( ")
}