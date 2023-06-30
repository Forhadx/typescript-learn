//=== Type Aliases

type Combinable = number | string;

function add(val1: Combinable, val2: Combinable) {
  let result;

  if (typeof val1 === "number" || typeof val2 === "number") {
    result = +val1 + +val2;
  } else {
    result = val1.toString() + val2.toString();
  }

  return result;
}

let numAdd = add(23, 33);
console.log(numAdd);

let strAdd = add("Hello ", "World");
console.log(strAdd);
