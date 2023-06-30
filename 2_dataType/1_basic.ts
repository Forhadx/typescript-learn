function add(num1: number, num2: number) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("incorrect input");
  }
  return num1 + num2;
}

let a: number;
let b: number;
a = 12
b = 34

let result = add(a, b);

console.log(result);
