/*
    inheritance  
*/

class Human {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  show() {
    console.log("name is: ", this.name);
  }
}

class Student extends Human {
  constructor(public name: string, public age: number) {
    super(name);
  }

  details() {
    console.log("name: ", this.name + " age: " + this.age);
  }

  show() {
    console.log("override details: ", this.name);
  }
}

let st = new Student("forhad", 26);

st.details(); // name:  forhad age: 26
st.show(); // override details:  forhad
