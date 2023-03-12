function asyncAwait() {
  const modes = [
    "monochrome",
    "monochrome-dark",
    "monochrome-light",
    "analogic",
    "complement",
    "analogic-complement",
    "triad",
    "quad",
  ];
  const callParameters = {
    format: "hex",
    mode: modes[1],
    numberOfColors: "6",
    seed: "283848",
  };
  const { format, mode, numberOfColors, seed } = callParameters;
  const baseUrl = `https://www.thecolorapi.com`;
  const endpoint = `/scheme?${format}=${seed}&mode=${mode}&count=${numberOfColors}`;

  /** Fetching and array of colors using then, catch */
  fetch(baseUrl + endpoint)
    .then((response) => response.json())
    .then((data) => {
      const colorArray = data.colors;
      const colorCodes = colorArray.map((color) => color.hex.value);
      console.log(colorCodes);
    });

  /** Equivalent code with Async Await*/
  const fetcher = async function () {
    // await can only be written inside async functions
    const response = await fetch(baseUrl + endpoint);
    const data = await response.json();
    const colorArray = data.colors;
    const colorCodes = colorArray.map((color) => color.hex.value);
    return colorCodes;
  };
  fetcher().then((result) => console.log(result)); // async functions return a promise that needs to be resolved before use.
}

asyncAwait();
