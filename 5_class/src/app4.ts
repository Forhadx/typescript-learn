/*
    getter setter  
*/

class Box {
  // public name: string;
  // protected name: string;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }

  set setName(value: string) {
    this.name = value;
  }
}

let box = new Box("square");

box.setName = "ract";

console.log(box.getName); // rect
