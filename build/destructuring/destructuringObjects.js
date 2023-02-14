const cats = [
    {
        name: "Mr Whiskerson",
        imageUrl: "/src/Features/Template/images/mr-whiskerson.png",
        phoneNo: "555-1234",
        email: "mr.whiskaz@catnap.meow",
    },
    {
        name: "Mrs Fluffykins",
        imageUrl: "/src/Features/Template/images/fluffykins.png",
        phoneNo: "655-1234",
        email: "mr.fluffy@catnap.meow",
    },
    {
        name: "Mrs Pumpkin",
        imageUrl: "/src/Features/Template/images/pumpkin.png",
        phoneNo: "755-1234",
        email: "mr.pumper@catnap.meow",
    },
    {
        name: "Mr Felix",
        imageUrl: "/src/Features/Template/images/felix.png",
        phoneNo: "855-1234",
        email: "mr.fella@catnap.meow",
    },
];
export default function destructObjects() {
    const [catOne, catTwo, catThree] = cats;
    console.log(catOne, catTwo, catThree);
    const { name: test } = catOne;
    console.log(test);
}
// ! MDN Syntax
// const [a, b] = array;
// const [a, , b] = array;
// const [a = aDefault, b] = array;
// const [a, b, ...rest] = array;
// const [a, , b, ...rest] = array;
// const [a, b, ...{ pop, push }] = array;
// const [a, b, ...[c, d]] = array;
// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 = aDefault, b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;
// const { [key]: a } = obj;
// let a, b, a1, b1, c, d, rest, pop, push;
// [a, b] = array;
// [a, , b] = array;
// [a = aDefault, b] = array;
// [a, b, ...rest] = array;
// [a, , b, ...rest] = array;
// [a, b, ...{ pop, push }] = array;
// [a, b, ...[c, d]] = array;
// ({ a, b } = obj); // brackets are required
// ({ a: a1, b: b1 } = obj);
// ({ a: a1 = aDefault, b = bDefault } = obj);
// ({ a, b, ...rest } = obj);
// ({ a: a1, b: b1, ...rest } = obj);
