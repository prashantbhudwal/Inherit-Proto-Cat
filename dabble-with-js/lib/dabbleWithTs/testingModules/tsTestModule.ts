export default function tsTestModuleFunction() {
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

  const logCat = function logACatOnTheConsole() {
    console.log("I logged a Cat with logCat()");
  };

  logCat();
  console.log("function name:", logCat.name);
}
