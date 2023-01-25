export default function practicingTypes() {
  let nullValue = null;

  let undefinedValue = undefined;

  console.log(nullValue);

  console.log(undefinedValue);

  console.log(nullValue === undefinedValue);

  console.log(typeof null);

  console.log(typeof undefined);

  console.log(typeof "dog");

  console.log(typeof [1, 2, 3]);

  // typeof Objects
  console.log(typeof { a: 1, b: 2, c: 3 });

  let testObject = {
    a() {
      man: "wow";
    },
  };

  console.log(typeof testObject);

  console.log(typeof testObject.a); // Returns function

  // Type of functions

  const logDog = () => {
    console.log("I logged a Dog");
  };

  logDog();

  console.log(typeof logDog);

  class logCat {
    constructor() {
      this.legs = 4;
      this.isLazy = true;
    }
    logVoice() {
      console.log("Meow");
    }
  }

  console.log(typeof logCat);

  let misty = new logCat();
  console.log(misty);
  console.log(typeof misty);
  console.log(misty.isLazy);
  misty.logVoice();
}

// Detour embedding functions

// function testFunction() {
//   return "Test function returned this value.";
//   function embeddedFunction() {
//     return "Embedded function returned this value";
//   }
// }

// let anotherTest = new testFunction();
// console.log(anotherTest);

// console.log(anotherTest.embeddedFunction());
