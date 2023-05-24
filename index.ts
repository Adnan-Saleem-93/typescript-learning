class Person {
	fullName: string;
	constructor(public firstName: string, public lastName: string) {
		this.fullName = `${firstName} ${lastName}`;
	}
}

// Interfaces
interface User {
	firstName: string;
	lastName: string;
}

const person = new Person("John", "Doe");

const greetUser = (user: User): string => {
	return `Hello ${user.firstName} ${user.lastName}`;
};
const consoleUser = (user: User): void => {
	console.log(`Hello ${user.firstName} ${user.lastName}`);
};

const newPerson = new Person("Jon", "Snow");
consoleUser(newPerson);
