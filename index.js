"use strict";
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = "".concat(firstName, " ").concat(lastName);
    }
    return Person;
}());
var person = new Person("John", "Doe");
var greetUser = function (user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
};
document.body.innerText = greetUser(person);
