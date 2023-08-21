/*
  types
*/

//================ ex 1 ================
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

let x = add(20, 12);
console.log(x); //32

//================ ex 2 ===================

type Admin = {
  name: String;
  privileges: String[];
};

type Employee = {
  name: String;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "forhad",
  privileges: ["create-server"],
  startDate: new Date(),
};

type UnknowEmployee = Admin | Employee;

function printEmployee(emp: UnknowEmployee) {
  console.log("name: ", emp.name);

  if ("privileges" in emp) {
    console.log("privileges: ", emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("startDate: ", emp.startDate);
  }
}
printEmployee(e1);
