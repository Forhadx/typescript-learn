/*
  class initialization, constructor

*/

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("name: " + this.name);
  }

  // only depart instances can access this method
  describe2(this: Department) {
    console.log("name: " + this.name);
  }
}

const accounting = new Department("accounting");

// console.log(accounting);
/* output
        Department {name: 'accounting'}
        [[Prototype]]:Object
*/

accounting.describe();
/*output
    name: accounting
*/

//------------------------ copy class -------

/* type: 1
//this can access this method but there have no name instances
const copyAccounting = {
  describe: accounting.describe,
};
copyAccounting.describe(); // output= name: undefined
*/

/* type: 2
//this can't be access cause this describe method need name instance
const copyAccounting = {
  describe: accounting.describe2,
};
 copyAccounting.describe() 
*/

/* type: 3
const copyAccounting = {
  name: "english",
  describe2: accounting.describe2,
};
copyAccounting.describe2(); // max can access this method 
*/

// /* type: 4
const copyAccounting = accounting;
copyAccounting.name = "dummy";
copyAccounting.describe2(); // output= name: dummy
