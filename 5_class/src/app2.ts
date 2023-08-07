/*
    public, private, readonly
*/

class Person {
  private name: string;

  constructor(n: string) {
    this.name = n;
  }

  private show() {
    console.log("name is: ", this.name);
  }

  changeName(name: string) {
    this.name = name;
  }

  displayName() {
    console.log("The name is: ", this.name);
  }
}

const obj1 = new Person("forhad");

// obj1.name = "jhon"; // cann't be accessible.
// obj1.show(); // private methos

obj1.changeName("jhon");
obj1.displayName();

//-------------- another way define class

class Course {
  constructor(private id: string, public name: string) {}

  display() {
    console.log(`id: ${this.id}, name: ${this.name}`);
  }
}

let obj2 = new Course("one", "English");
obj2.display();

/* readOnly
    
      constructor(private readOnly id: string, public name: string) {}

      'readonly' only use during initialization. this property can't be write
*/
