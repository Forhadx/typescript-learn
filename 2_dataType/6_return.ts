// return type

// normal
function a(val1: number, val2: number) {
  return val1 + val2;
}
let numAdd = a(23, 33);

// void
function b(val1: number, val2: number): void {
  console.log("hi");
}
b(23, 44);

// number (as string)
function c(val1: number, val2: number): number {
  return val1 + val2;
}
console.log(c(23, 44));
