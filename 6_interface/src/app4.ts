/*
  optional interface
*/

interface IHome {
  name?: string;
  owner?: string;
  price?: number; // i don't use this in class but no error occure bxz it's optional
}

class Home implements IHome {
  name?: string;
  owner?: string; // i don't use this in constructor but no error occure bxz it's optional

  // n default value is undefined
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
}
