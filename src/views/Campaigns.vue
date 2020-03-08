<template>
  <div>
    <div v-if="!LoggedIn">
      <p>You need to be logged in.</p>
    </div>
    <div v-else>
      <div v-if="!IsLoaded">
        <p>Loading</p>
      </div>
      <div v-else>
        <div v-for="campaign in Campaigns" :key="campaign.name">
          <div class="campaign">
            {{ campaign.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "../repositories/RepositoryFactory";
const CampaignRepository = RepositoryFactory.get("Campaigns");

export default {
  name: "campaigns",
  components: {},
  props: {
    LoggedIn: Boolean
  },
  data() {
    return {
      IsLoaded: false,
      Campaigns: []
    };
  },
  watch: {
    LoggedIn: function() {
        if (this.LoggedIn) {
          console.log("noticed playerid");
          this.PlayerID = JSON.parse(localStorage.User).id;
          this.fetch();
        }
    }
  },
  created() {
    if (this.LoggedIn) {
      this.PlayerID = JSON.parse(localStorage.User).id;
      this.fetch();
    }
  },
  methods: {
    async fetch() {
      console.log(JSON.parse(localStorage.User).id);
      await CampaignRepository.getPlayerCampaigns(this.PlayerID).then(response => {
        this.Campaigns = response;
        this.IsLoaded = true;
      });
      
    }
  }
};
</script>
<style scoped>
.campaign {
    height: 300px;
    width: 200px;
    margin: 10px;
    background-color: rgb(104, 104, 104); 
}

.CampaignHeader {
      background-color: rgb(104, 104, 104);
    }
</style>
