export default function getColorApiUrl() {
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

  return baseUrl + endpoint;
}
