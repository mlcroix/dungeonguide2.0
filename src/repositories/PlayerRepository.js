import Repository from "./Repository";

const resource = "/players";
export default {
  get() {
    return Repository.get(`${resource}`);
  },

  Login(data) {
    return Repository.post(`${resource}/Login`, data).then(response => {
      if (response.status != 200) {
        return false;
      } else {
        return response.data;
      }
    });
  },

  SignUP(data) {
    let response = Repository.post(`${resource}/signup`, data);
    return response;
  }
};
