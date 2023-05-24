interface User {
	readonly fullName: { readonly firstName: string; lastName: string };
	age?: number;
}
const user: User = {
	fullName: { firstName: "Jon", lastName: "Snow" },
	age: 22,
};

console.log(user);
