import axios from "azios";
const baseDomein = "https://dungeonguidev2.herokuapp.com";
const baseUrl = `${baseDomein}`;

export default axios.create({
  baseUrl
});
