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
  age: number;
};

type Employee = {
  name: String;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // intersection

const e1: ElevatedEmployee = {
  name: "forhad",
  age: 22,
  startDate: new Date(),
};

type UnknowEmployee = Admin | Employee; // union

function printEmployee(emp: UnknowEmployee) {
  console.log("name: ", emp.name);

  if ("age" in emp) {
    console.log("age: ", emp.age);
  }

  if ("startDate" in emp) {
    console.log("startDate: ", emp.startDate);
  }
}
printEmployee(e1);

//================ ex 3 ===================
class Car {
  drive() {
    console.log("car drive");
  }
}

class Truck {
  drive() {
    console.log("truck drive");
  }

  loadCargo(amount: number) {
    console.log("loading cargo: ", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  // another way for clas
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10);
  }
}
useVehicle(v1);
useVehicle(v2);

//================ ex 3 ===================
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 12 });

//================ ex 4 (type cast) ===================

// const inputElement = <HTMLInputElement>document.getElementById('myId')!
const inputElement = document.getElementById("myId")! as HTMLInputElement; // ! use for if myId not found then its will be work

inputElement.value = "hello world";

//================ ex 4 (optional check ) ===================

let userData = {
  id: "1",
  name: "forhad",
  // job: {
  //   title: "ceo",
  // },
};

//= if i comment job then print this. not compile
//= solve: use if condition for each object
// console.log(userData?.job?.title);

//================ ex 4 (nullish coalescing) ===================

let userFirstName = "";
let userLastName = undefined;

const s1 = userFirstName ?? "default";
const s2 = userLastName ?? "default";

console.log("s1: " + s1); // ''empty string print
console.log("s2: " + s2); // 'default' string print
