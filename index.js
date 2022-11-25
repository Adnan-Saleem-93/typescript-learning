var printHelloWithName = function (text) {
    return "Hello ".concat(text);
};
var message = 'World';
var header = document.createElement('h1');
header.textContent = printHelloWithName(message);
// message = 0 -> this iwll cause an error because when we assigned 'World' to 'message' variable, TS inferred its type to string. So 'message' can only be assigned string values.
document.body.appendChild(header);
