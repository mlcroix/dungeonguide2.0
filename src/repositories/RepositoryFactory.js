import CampaignRepository from "./CampaignRepository";

const repositories = {
  Campaigns: CampaignRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
