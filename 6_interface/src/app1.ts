/*
  interface with object
*/

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "John",
  age: 34,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};


user1.greet('hi there') // hi there John