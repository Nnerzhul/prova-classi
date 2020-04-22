class Cerchio {
  constructor(raggio) {
    this.raggio = raggio;
  }

  circonferenza() {
    return this.raggio * 2 * Math.PI;
  }

  area() {
    return this.raggio * this.raggio * Math.PI;
  }
}

class Rettangolo {
  constructor(base, altezza) {
    this.b = base;
    this.h = altezza;
  }

  prerimetro() {
    return this.b * 2 + this.h * 2;
  }

  area() {
    return this.b * this.h;
  }
}

class Quadrato extends Rettangolo {
  constructor(lato) {
    super(lato, lato);
    this.l = lato;
  }
}

const cerchio1 = new Cerchio(8);
console.log(cerchio1.area());
console.log(cerchio1.circonferenza());

const rettangolo1 = new Rettangolo(7, 9);
console.log(rettangolo1.area());
console.log(rettangolo1.prerimetro());

const quadrato1 = new Quadrato(5);
console.log(quadrato1.area());
console.log(quadrato1.prerimetro());
