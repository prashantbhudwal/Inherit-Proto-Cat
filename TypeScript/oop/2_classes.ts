class Dog {
  name: string;
  pets: number;
  isHappy: boolean;
  readonly legs: number;
  constructor(name: string, pets: number = 0, isHappy: boolean = false) {
    this.name = name;
    this.pets = pets;
    this.isHappy = isHappy;
    this.legs = 4;
  }
  // static keyword is use to mark utilities or static methods from the instance methods
  static isTheDogHappy(petCount: number) {
    const isHappy = petCount > 5 ? true : false;
    return isHappy;
  }
  givePets() {
    this.pets += 1;
    this.isHappy = Dog.isTheDogHappy(this.pets);
  }
  avoidPetting = () => {
    this.pets -= 1;
    this.isHappy = Dog.isTheDogHappy(this.pets);
  };
  superPets() {
    this.pets += 5;
    this.isHappy = Dog.isTheDogHappy(this.pets);
  }
}

const golden = new Dog("grok");
const hound = new Dog("Hound");

console.log(golden, hound);

golden.givePets();
console.log(golden.isHappy, golden.pets);
golden.givePets();
console.log(golden.isHappy, golden.pets);
golden.superPets();
console.log(golden.isHappy, golden.pets);

console.log(hound.isHappy, hound.pets);

export { golden };
