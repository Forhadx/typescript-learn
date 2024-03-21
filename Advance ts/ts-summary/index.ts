/*   Topics
    - and or

*/
//################# And Or ################
console.log("--------------- And Or -----------------");
type TUser = {
  name: string;
};

type TPermission = {
  canRead: boolean;
};

// and
const user: TUser & TPermission = {
  name: "forhad",
  canRead: true,
};

// or
type TStringOrNumber = String | Number;
const printValue = (value: TStringOrNumber) => {
  return value.toString();
};

console.log(printValue("Ten"));
console.log(printValue(10));

//################# ReadOnly ################
console.log("-------------- ReadOnly ------------------");

type TProduct = {
  name: string;
  price: number;
};

const products: Readonly<TProduct[]> = [
  {
    name: "Product",
    price: 100,
  },
];

// products[0]?.price = 100; // edit not possible
console.log(products);

//################# Pick ################
console.log("-------------- Pick ------------------");

interface IStudent {
  id: number;
  name: string;
  age: number;
  email: string;
}

// pick not use in interface
type TStudentPreview = Pick<IStudent, "id" | "name">;

const student: IStudent = {
  id: 1,
  name: "forhad",
  age: 20,
  email: "<EMAIL>",
};

const studentPreview: TStudentPreview = {
  id: 1,
  name: "forhad",
};

//################# type guard ################
console.log("-------------- type guard ------------------");

interface IVisitor {
  id: number;
  name: string;
  email: string;
}

interface IProduct {
  id: number;
  title: string;
  price: number;
}

type TApiResponse = IVisitor | IProduct;

function isVisitor(res: TApiResponse): res is IVisitor {
  return (res as IVisitor)?.email !== undefined;
}

function isProduct(res: TApiResponse): res is IProduct {
  return (res as IProduct)?.price !== undefined;
}

let data = {
  id: 1,
  name: "forhad",
  email: "<EMAIL>",
};

if (isVisitor(data)) {
  console.log("Visitor: " + data?.name);
}
if (isProduct(data)) {
  console.log("Product: " + data?.title);
}
