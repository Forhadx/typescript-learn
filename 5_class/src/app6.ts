/*
    abstract
*/

abstract class Shape {
  // abstract method must be declare in abastract class
  abstract area(num: number): void;
}

class Triangle extends Shape {
  public x: number;

  constructor(x: number) {
    super();
    this.x = x;
  }

  // if area not declare then gave a error for abstract method
  area() {
    console.log(this.x * this.x);
  }
}

let t = new Triangle(5);
t.area(); // 25
