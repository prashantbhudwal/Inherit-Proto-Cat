//create a dummy person object name john
const john = {
  name: "John",
  age: 30,
  address: "lorem",
  hobbies: ["football", "basketball", "swimming"],
  isMarried: true,
  sayHello: function () {
    console.log("Hello John");
  },
  records: {
    name: "John",
  },
};

const abramov = {
  name: "Dan",
  age: 30,
  address: "lorem",
  hobbies: ["cricket", "tennis", "swimming"],
  isMarried: false,
  sayHello: function () {
    console.log("Hello Dan");
  },
  records: {
    name: "Dan",
  },
};

const cloneAPerson = (person) => {
  let clone = {
    name: person.name,
    age: person.age,
    address: person.address,
    hobbies: person.hobbies,
    isMarried: person.isMarried,
    sayHello: person.sayHello,
    records: person.records,
  };
  clone.name = "Clone of " + person.name;
  clone.records.name = "Clone of " + person.records.name;
  return clone;
};

const cloneJohn = cloneAPerson(john);
const cloneAbramov = cloneAPerson(abramov);
console.log(john.records.name);
console.log(cloneJohn.records.name);
console.log(abramov.records.name);
console.log(cloneAbramov.records.name);
