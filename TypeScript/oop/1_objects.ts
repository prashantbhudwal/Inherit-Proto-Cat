let dogObject = {
  name: "Mon",
  legs: 2,
  pets: 0,
  isHappy: false,
  sayName: () => {
    return `My name is ${dogObject.name}`;
  },
  jump: () => {
    return `I am a dog that jumps`;
  },
  incrementPets: () => {
    dogObject.pets += 1;
    if (dogObject.pets >= 10) dogObject.isHappy = true;
  },
  decrementPets: () => {
    dogObject.pets -= 1;
    if (dogObject.pets < 10) dogObject.isHappy = false;
  },
  superPet: () => {
    dogObject.pets += 5;
  },
};

/**
 * The dog object can also be stored as follows,
 * The difference between these two objects will become apparent if you try to copy the methods from one object to another.
 * If you copy superPet from dogObject to another object, it will still modify dogObject.pets, not the pets property of the new object.
 * But if you copy superPet from dogObjectWithThis to another object, it will correctly modify the pets property of the new object.
 * However note that I have removed the arrow functions because then this will become undefined.
 * I don't really have full clarity on the reason. Will find out later
 **/

let dogObjectWithThis = {
  name: "Mon",
  legs: 2,
  pets: 0,
  isHappy: false,
  sayName: function () {
    return `My name is ${this.name}`;
  },
  jump: () => {
    return `I am a dog that jumps`;
  },
  incrementPets: function () {
    this.pets += 1;
    if (this.pets >= 10) this.isHappy = true;
  },
  decrementPets: function () {
    this.pets -= 1;
    if (this.pets < 10) this.isHappy = false;
  },
  superPet: function () {
    this.pets += 5;
  },
};

export { dogObject, dogObjectWithThis };
