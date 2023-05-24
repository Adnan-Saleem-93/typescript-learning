interface Human {
	gender: string;
	age: number;
}
interface Person {
	readonly fullName: { readonly firstName: string; lastName: string };
	dateOfBirth: string;
}
interface Student extends Human, Person {
	class?: number;
}
const user: Student = {
	fullName: { firstName: "Jon", lastName: "Snow" },
	class: 2,
	gender: "male",
	age: 8,
	dateOfBirth: "05 August, 2003",
};

console.log(user);
