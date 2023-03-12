import getColorApiUrl from "./helpers/getColorApiUrl.js";
function asyncAwait() {
  const url = getColorApiUrl();
  /** Fetching and array of colors using then, catch */
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const colorArray = data.colors;
      const colorCodes = colorArray.map((color) => color.hex.value);
      console.log(colorCodes);
    });

  /** Equivalent code with Async Await*/
  const fetcher = async function () {
    // await can only be written inside async functions
    const response = await fetch(url);
    const data = await response.json();
    const colorArray = data.colors;
    const colorCodes = colorArray.map((color) => color.hex.value);
    return colorCodes;
  };
  fetcher().then((result) => console.log(result)); // async functions return a promise that needs to be resolved before use.
}

asyncAwait();
