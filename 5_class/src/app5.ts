/*
    static: variable, function
*/

class Sum {
  static age = 24;

  static area(num: number) {
    return num * num;
  }
}

let obj = Sum.area(2);

console.log(obj); // 4
console.log(Sum.age); // 24
