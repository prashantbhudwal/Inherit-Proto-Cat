export default function experimentingWithClasses() {
  class logCat {
    constructor() {
      this.legs = 4;
      this.isLazy = true;
    }

    logVoice() {
      console.log("Meow");
    }

    //    console.log("fog") This doesnt work
  }

  let misty = new logCat();

  // Classes are essentially constructors

  const Cat = function constructCatsThatMeow() {
    console.log("I Construct Real Cats");
  };

  Cat.prototype.legs = 4;
  Cat.prototype.isLazy = true;

  Cat.prototype.logVoice = function logCatVoice() {
    console.log("Meow"); // This doesn't work in a class
  };

  let bob = new Cat();

  bob.height = 10;
  bob.length = 10;
  bob.isSquareCat = true;

  console.log(bob.hasDogeCoin);

  setTimeout(() => console.log(bob.hasDogeCoin), 5);

  Cat.prototype.hasDogeCoin = false;

  console.log(bob.hasDogeCoin);
}
