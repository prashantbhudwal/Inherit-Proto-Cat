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

const mandal = {
  name: "Mandal",
  age: 30,
  address: "lorem",
  hobbies: ["cricket", "tennis", "swimming"],
  isMarried: false,
  sayHello: function () {
    console.log("Hello Mandal");
  },
  records: {
    name: "Mandal",
  },
};

const mohila = {
  name: "Mohila",
  age: 30,
  address: "lorem",
  hobbies: ["cricket", "tennis", "swimming"],
  isMarried: false,
  sayHello: function () {
    console.log("Hello Mohila");
  },
  records: {
    name: "Mohila",
  },
};

// Deep copy
const deepCloneMandal = _.cloneDeep(mandal);
const deepCloneMohila = _.cloneDeep(mohila);
console.log(deepCloneMandal);
console.log(deepCloneMohila);
