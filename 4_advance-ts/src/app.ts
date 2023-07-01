//========  let const var
const userName = "forhad";
// userName = "roni"; // x

let age = 26;
age = 20;
// age = "a"; // x

var job = "it";
job = "network";
// job = 23; // x

//========= arrow function

// let add1 = (a) => console.log(a); // x , must be add type
let add1 = (a: any) => console.log(a); //

// this is possible
let add2: (a: number | string) => void = (a) => console.log(a); 

//====== default function parameter

let show1 = (a: number, b: number) => a + b;
// show(1) // x this will show error

let show2 = (a: number, b: number = 10) => a + b;
show2(20); // this won't cz b have default value

// ========== rest operator

// must be define the type
let myFun1 = (...all: string[]) => {
  console.log(all);
};

myFun1("a", "b", "c");
