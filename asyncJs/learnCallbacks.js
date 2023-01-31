export default function learnCallbacks() {
  const copyFunctions = function howToCopyFunctions() {
    let globalDog = `🐕`;

    let logDog = function iLogADog() {
      let localDog = "🐶";
      console.log(localDog);
      console.log(globalDog);
    };

    let logCat = function iLogACat() {
      console.log("🐱");
    };

    let logDogV2 = logDog;
    logDogV2();

    globalDog = "New Dog!";
    console.log(iLogADog);
    logDog.localDog = "test";
    console.log(logDog.localDog);
    logDogV2();
  };

  const buildArrayDotFilter = function buildArrayDotFilterFromScratch() {
    const people = [
      { name: "Jack", hasPet: true },
      { name: "Jill", hasPet: false },
      { name: "Alice", hasPet: true },
      { name: "Bob", hasPet: false },
    ];

    // Array.prototype.filter()
    const hasPetFilter = function hasPetFilterCallbackForFilterMethod(people) {
      return people.hasPet === true;
    };

    const peopleWithPets = people.filter(hasPetFilter);
    console.log(peopleWithPets);

    // Rebuilding Array.prototype.filter()

    const manualFilter = function filterArrayWithoutFilterMethod(
      array,
      filterCallbackFunction
    ) {
      let filteredArray = [];
      array.forEach((element) => {
        if (filterCallbackFunction(element)) {
          filteredArray.push(element);
        }
      });
      return filteredArray;
    };

    const peopleWithPetsAgain = manualFilter(people, hasPetFilter);
    console.log(peopleWithPetsAgain);
  };

  buildArrayDotFilter();
}
