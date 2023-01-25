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

  console.log(typeof testObject.a); // Returns function

  // Type of functions

  const logDog = () => {
    console.log("I logged a Dog");
  };

  logDog();

  console.log(typeof logDog);
}
