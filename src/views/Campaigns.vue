<template>
<p>campaigns</p>
</template>

<script>
import Repoistoriesfactory from "../repositories/RepositoryFactory";
const CampaignRepository = Repoistoriesfactory.get('Campaigns')
const CampaignService = new campaignservice();
export default {
  name: "campaigns",
  components: {
  }
};
</script>
