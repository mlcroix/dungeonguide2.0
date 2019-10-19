import axios from "axios";
const baseDomein = "https://dungeonguidev2.herokuapp.com";
const baseUrl = `${baseDomein}`;

export default axios.create({
  baseURL: baseUrl
});
