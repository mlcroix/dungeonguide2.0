import Repository from "./Repository";

const resource = "/campaigns";
export default {
  get() {
    return Repository.get(`${resource}`);
  }
};
