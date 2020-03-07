<template>
  <div>
    <div v-for="campaign in Campaigns" :key="campaign.name">
      <div class="campaign">
        {{ campaign.name }}
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
  data() {
    return {
      isLoaded: false,
      Campaigns: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      console.log(JSON.parse(localStorage.User).id)
      await CampaignRepository.getPlayerCampaigns(JSON.parse(localStorage.User).id ).then(response => {
        this.Campaigns = response;
        this.isLoaded = true;
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
