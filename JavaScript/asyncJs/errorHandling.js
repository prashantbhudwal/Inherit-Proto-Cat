import getColorApiUrl from "./helpers/getColorApiUrl.js";

function errorHandling() {
  const url = getColorApiUrl();
  const incorrectUrl =
    "https://www.thecolorapi.com/scheme?hex=283848&mode=monchrome-dark&count=6";

  /** Error handling in .then 
  fetch(incorrectUrl)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log("🔴 Error in receiving the response:");
      console.log(error);
    })
    .then((response) => response.json())
    .catch((error) => {
      console.log("🟠 Error in parsing the response to json:");
      console.log(error);
    })
    .then((data) => {
      const colorArray = data.colors;
      const colorCodes = colorArray.map((color) => color.hex.value);
      console.log(colorCodes);
    })
    .catch((error) => {
      console.log("🟡 Error in mapping the json");
      console.log(error);
    });

*/

  /** Error handling in async await */

  const colorFetcher = async function () {
    try {
      const response = await fetch(url);
      console.log(response);
      const json = await response.json();
      console.log(json);
      return json.colors;
    } catch (error) {
      // Report to Sentry here
      console.log("🔴 Error in receiving the response:");
      console.log(error);
    }
  };
  const data = colorFetcher();
  console.log(data);
  data.then((data) => console.log(data));
  //   colorFetcher().then((data) => console.log(data));
}

errorHandling();
