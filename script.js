function Cat() {
  this.legs = 4;
  this.color = `green`;
  //   this.ears = 5; //Takes preference
}

// Constructor --> Proto

// Adding properties
Cat.prototype.ears = 2;

console.log(`About Misty>>>>>>>>>>>>>>>>>>>>`);
let misty = new Cat();
console.log(misty);
console.log(misty.legs);
console.log(misty.color);
console.log(`Ears`, misty.ears);

console.log(Cat.color);

console.log(Cat.prototype.constructor.color);

Cat.color = "blue";

console.log(Cat.color);

console.log(`About Bob>>>>>>>>>>>>>>>>>>>>>>>>`);
let bob = new Cat();
console.log(bob);
console.log(bob.legs);
console.log(bob.color);
console.log(`Ears`, bob.ears);
constructor.color;
