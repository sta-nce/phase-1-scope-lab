// Write your solution in this file!
var customerName = 'bob';
var bestCustomer = "not bob";
const leastFavoriteCustomer ="XYZ";

function upperCaseCustomerName(){
    let stance = customerName.toUpperCase();
    return stance;
}
//console.log(upperCaseCustomerName());

function setBestCustomer(){
   return bestCustomer;
}


function overwriteBestCustomer(){
 bestCustomer = "maybe bob";
}
console.log(overwriteBestCustomer())

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer  = 'Assignment to constant variable.'
    return leastFavoriteCustomer ;
} 
console.log(changeLeastFavoriteCustomer());