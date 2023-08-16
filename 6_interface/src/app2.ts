/*
  interface with class
*/

interface Named {
  name: string;
}

interface FirstNamed {
  firstName: string;
}

interface Greet extends Named {
  // extend multiple interfaces with comma (extends a,b,c{})
  readonly lastName: string; // public, private not allowed, only readonly canbe used
  greet(phrase: string): void;
}

// implements multiple interfaces with comma (extends a,b,c{})
class User implements Greet, FirstNamed {
  name: string;
  firstName: string;
  lastName: string;

  age = 30;

  constructor(n: string, f: string, l: string) {
    this.name = n;
    this.firstName = f;
    this.lastName = l;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user2: Greet;
user2 = new User("forhad", "shamsul", "haq");
// user2.lastName = "John"; // not possible reassign lastName

user2.greet("hi there"); // hi there forhad
