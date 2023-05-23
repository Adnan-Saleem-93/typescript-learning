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

const greetUser = (user: User) => {
	return `Hello ${user.firstName} ${user.lastName}`;
};
document.body.innerText = greetUser(person);
