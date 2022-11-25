var randomArr = ['World.!!!', 'Hello', 10];
// Typescript inferred 'randomArr' type as (string | number)[]
var header = document.createElement('h1');
header.textContent = "".concat(randomArr[1], " ").concat(randomArr[0]);
// randomArr = ['h1', 1, false]
// the above will result in an error because the third element is a boolean value, which is not allowed in type (string | number)[]
document.body.appendChild(header);
