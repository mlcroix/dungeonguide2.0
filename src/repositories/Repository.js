import axios from "axios";
const baseDomein = "https://dungeonguide.herokuapp.com";
const baseUrl = `${baseDomein}`;

export default axios.create({
  baseURL: baseUrl
});
