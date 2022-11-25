var message = 'Number Type';
// there are 2 types of numbers in TS/JS
// 1. number/floating-point
// 2. bigint/big integer
// number types
var decimal = 200;
var binary = 1;
var octal = 10;
var hexadecimal = 0xb;
// decimal =  9007199254740991n
// in above example, value of type 'bigint' is being assigned to 'decimal' whose type was inferred as 'number' by TS, so this will cause an error
// big int
// let bigNumber = 9007199254740991n
// bigNumber = 0.6
// similarly, in above example, value of type 'number' is being assigned to 'bigNumber' whose type was inferred as 'bigint' by TS, so this will cause an error
var header = document.createElement('h1');
header.textContent = message;
document.body.appendChild(header);
