import Repository from "./Repository";

const resource = "/campaigns";
export default {
  get() {
    return Repository.get(`${resource}`);
  },

  getPlayerCampaigns(playerID) {
    return Repository.get(`${resource}/playercampaigns/` + playerID).then(response => {
      if (response.status != 200) {
        return false;
      } else {
        return response.data;
      }
    });
  }
};
