// == any
let a1: any;
let b1: string;

a1 = 5;
a1 = "abc";
b1 = a1;
console.log(b1);

// == unknown
let a2: unknown;
let b2: string;

a2 = 5;
a2 = "abc";
// b2 = a2; // this can't assigned. cz a2 changeable type
if (typeof a2 === "string") {
  b2 = a2; // only this way assigned unknown type value
  console.log(b2);
}

// == never // is use as alternative of void.
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("an error occured", 500);
