export default function declaringFunctionsAirBnbStyle() {
  const logDog = () => {
    console.log("I logged a Dog with logDog()");
  };
  logDog();
  console.log("function name:", logDog.name);

  const logPanda = function () {
    console.log("I logged a Panda with logPanda()");
  };

  logPanda();
  console.log("function name:", logPanda.name);

  // This is preferred because a more descriptive name can be added
  // to a function that can be accessed with shorter name
  // and the function is not hoisted to the top

  const logCat = function logACatOnTheConsole() {
    console.log("I logged a Cat with logCat()");
  };

  logCat();
  console.log("function name:", logCat.name);
}
