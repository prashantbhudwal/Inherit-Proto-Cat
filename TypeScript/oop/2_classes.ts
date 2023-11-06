class Dog {
  name: string;
  pets?: number;
  isHappy?: boolean;
  readonly legs: number;
  constructor(name: string, pets: number = 0, isHappy: boolean = false) {
    this.name = name;
    this.pets = pets;
    this.isHappy = isHappy;
    this.legs = 4;
  }
  static readonly legs = 4;
}

const golden = new Dog("grok");
const hound = new Dog("Hound");

console.log(golden, hound);

export { golden };
