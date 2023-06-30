/**======= OBJECT ===== */

/*
enum Role {
  ADMIN,
  EMPLOYEE,
  VISITOR,
}

const person = {
  name: "forhad",
  age: 26,
  role: Role.ADMIN, // 0
  //   role: Role.VISITOR, // 2
};

console.log(person);
//output : {name: 'forhad', age: 26, role: 2}
*/

enum Role {
  ADMIN = 4,
  EMPLOYEE = "employee",
  VISITOR = 8,
}

const person = {
  name: "forhad",
  age: 26,
//   role: Role.ADMIN, // 4
    ROLE: Role.EMPLOYEE, // employee
};

console.log(person);
//output : {name: 'forhad', age: 26, role: 4}
