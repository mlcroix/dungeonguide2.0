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
          <div class="campaign" v-bind:class="{ invitedCampaign : campaign.state == 'Invited'}">
            <div class="CampaignHeader">
              {{ campaign.name }}
            </div>
            <img :src="require('../assets/Scroll.jpg')" class="campaignThumbprint" />
            <div class="campaignButtons">

            </div>
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
      await CampaignRepository.getPlayerCampaigns(this.PlayerID).then(response => {
        response.forEach(campaign => {
          if (campaign.active == 0 && campaign.dungeonmaster != this.PlayerID) {
            campaign.state = "Invited";
          } else if(campaign.dungeonmaster === this.PlayerID) {
            campaign.state = "DungeonMaster";
          } else if(campaign.active == 1 && campaign.dungeonmaster != this.PlayerID) {
            campaign.state = "Active";
          }
        });
        this.Campaigns = response;
        this.IsLoaded = true;
      });
    }
  }
};
</script>
<style scoped lang="scss">
.campaign {
    height: 300px;
    width: 200px;
    margin: 10px;
    background-color: rgb(104, 104, 104); 
    float: left;
    border-radius: 10px;
    border: 1px solid;
    overflow: hidden;  
}

.invitedCampaign {
    opacity: 0.5;
}

.CampaignHeader {
      height: 40px;
      background-color: rgb(248, 248, 248);    
      text-align: center;
      font-weight: bold;
}

.campaignThumbprint {
  max-width: 100%;
  max-height: 100%;
}

.campaignButtons {

}
</style>
