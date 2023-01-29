export default function AddingPropertiesToPrimitives() {
  let dogString = "dog eats meat";

  console.log(dogString);

  //This works because of primitive wrapper
  console.log(dogString.length);

  //This does not work because primitives are immutable
  // dogString.testObject = { a: "this object" };

  //This works because now the object is added to the
  //primitive wrapper's prototype

  dogString.__proto__.dogObject = {
    whoCreated: "this object was created by dogString",
    dogProperty: "this property added by dogString",
  };

  // Test object gets assigned to the prototype of the primitive wrapper of all
  //Strings you create after this point. Let's test that.

  //This is how you access the primitive wrapper
  // You are basically using a wrapper constructor to create a string object.

  let primitiveObject = new String("cat eats meat too!");

  console.log(primitiveObject);

  // Now if you check the output object,
  //it's prototype has has a property dogObject

  // This works because of prototype inheritance chain.
  //Js checks if dogString has a dogObject property
  //Else it goes to its prototype to check

  console.log(dogString.dogObject.dogProperty);

  // How inheritance works.

  let lionString = "lions obviously eat meat!";
  lionString.__proto__.dogObject.lionProperty =
    "I am a lion property added by lionString on dogObject";

  // This works
  console.log(dogString.dogObject.lionProperty);

  //The prototype traversal makes this possible.
  //In Js the prototype ensures inheritance.
}
