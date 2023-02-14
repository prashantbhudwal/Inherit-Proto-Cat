export default function learnMap() {
    /*
  Challenge 1:
  Given an array of numbers, return an array of each number, squared
  */
    const nums = [1, 2, 3, 4, 5];
    // -->       [1, 4, 9, 16, 25]
    // Your code here
    const squares = nums.map((number) => {
        return number * number;
    });
    console.log(squares);
    /*
  Challenge 2:
  Given an array of strings, return an array where
  the first letter of each string is capitalized
  */
    const names = ["alice", "bob", "charlie", "danielle"];
    // -->        ["Alice", "Bob", "Charlie", "Danielle"]
    // Your code here
    const PascalNames = names.map((name) => {
        let Name;
        Name = name.charAt(0).toLocaleUpperCase() + name.slice(1);
        console.log(Name);
    });
    /*
  Challenge 3:
  Given an array of strings, return an array of strings that wraps each
  of the original strings in an HTML-like <p></p> tag.
  
  E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
  return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
  */
    const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
    // -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
    // Your code here
    const pokePara = pokemon.map((pokemon) => {
        return `<p>${pokemon}</p>`;
    });
    console.log(pokePara);
}
