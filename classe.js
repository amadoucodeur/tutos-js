function Animal(type) {
  this.type = type;

  this.getType = () => {
    return this.type;
  };
}

function Chien(nom) {
  Animal.call(this, "chien");
  this.nom = nom;
}

Chien.prototype = Object.create(Animal);
Chien.prototype = Animal.prototype

// let c = new Chien("bob")

// console.log(Chien.prototype())

class Electro {
  constructor(type) {
    this.type = type;
  }
}

class Utils {
  constructor(type) {
    this.type = type;
  }
}

class Phone extends Electro {
  constructor(nom) {
    super("phone")
    this.nom = nom;
  }
}

let p = new Phone("Aple")
console.log(p.type)