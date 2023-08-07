/*
    singleton & private constructor
*/

class PC {
  private static instance: PC;
  public name: string;

  private constructor(name: string) {
    this.name = name;
  }

  static getInstance(n: string) {
    if (!this.instance) {
      this.instance = new PC(n);
    }

    return this.instance;
  }

  show() {
    console.log("name: ", this.name);
  }
}

// let p = new PC("asos"); // for private constructor this couldn't be initilize

let p = PC.getInstance("asos");
p.show(); // name: asos
