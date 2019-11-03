import CampaignRepository from "./CampaignRepository";
import PlayerRepository from "./PlayerRepository";

const repositories = {
  Campaigns: CampaignRepository,
  Players: PlayerRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
