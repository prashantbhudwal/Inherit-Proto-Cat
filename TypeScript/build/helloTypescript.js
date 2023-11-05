import tsTestModuleFunction from "./testingModules/tsTestModule";
const helloTypescript = function myFirstTypescriptFunction() {
    let logDog;
    const petDog = "Tap,Tap...Good Dog!";
    logDog = function () {
        console.log(petDog);
    };
    tsTestModuleFunction();
};
export { helloTypescript };
