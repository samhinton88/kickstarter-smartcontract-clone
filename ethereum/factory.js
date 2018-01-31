import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xB36C8b19221ce2a276d32A43472d62D30B48BC93"
);

export default instance;
