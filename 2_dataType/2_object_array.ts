/**======= OBJECT ===== */
/*
const person: object = {
  name: "forhad",
  age: 26,
};
*/

/*
const person: {
  name: string;
  age: number;
} = {
  name: "forhad",
  age: 26,
};
*/

const person = {
  name: "forhad",
  age: 26,
};

console.log(person);

/**======== ARRAY ========== */
let myArr: string[];

myArr = ["forhad", "ali", "hamza"];

// myArr = [2, 3, 4]; // give error for number type

console.log(myArr);

/**======== TUPLE ========== */

let myTuple: [number, string, string];
myTuple = [23, "abc", "efg"];
// myTuple = [23, "abc", "efg", 32]; // not allow

console.log(myTuple);
