import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x3BC0d39e1d50c58928622c7d04d1D2AbAD0d897e"
);

export default instance;
