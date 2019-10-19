<template>
<p>campaigns</p>
</template>

<script>
import { RepositoryFactory } from "../repositories/RepositoryFactory";
const CampaignRepository = RepositoryFactory.get('Campaigns')

export default {
  name: "campaigns",
  components: { },
  data() {
    return {
      isLoaded: false,
      Campaigns: [],
    }
  },
  created () {
    this.fetch();
  },
  methods: {
    async fetch () {
      const { data } = await CampaignRepository.get();
      this.Campaigns = data;
      this.isLoaded = true;
    }
  }
};
</script>
