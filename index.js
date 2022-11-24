var printHelloWithName = function (name) {
    return "Hello ".concat(name);
};
var header = document.createElement('h1');
header.textContent = printHelloWithName('People.!');
document.body.appendChild(header);
