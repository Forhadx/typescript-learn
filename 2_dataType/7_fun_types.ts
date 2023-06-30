// == assing function

function add(val1: number, val2: number) {
  return val1 + val2;
}

function show(val1: number): void {
  console.log("hi: ", val1);
}

// let assinFuc: Function;
let assinFuc: (a: number, b: number) => number;

assinFuc = add;

// assinFuc = show; // paramater, return type not match

console.log(assinFuc(23, 33));

