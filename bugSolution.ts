function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane Doe";
console.log(greeter(user)); // Works!

//Alternative solution if you need to handle arrays:
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(' ');
}

let users = ["Jane", "Doe"];
console.log(greeterArray(users)); // Works with array!