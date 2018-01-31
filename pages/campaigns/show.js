import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call()

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description:
          'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description:
          'You must contribute at least this much way to become a contributor'
      },
      {
        header: requestsCount,
        meta: 'Number of requests',
        description:
          'A request tries to withdraw money from the campaign. Requests must be approved by contributors'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description:
          'Number of approvers of this contract'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description:
          'The balance of how much money the campaign has to spend.'

      }

    ];

    return <Card.Group items={items} />
  }


  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        {this.renderCards()}

      </Layout>
    );
  }
}

export default CampaignShow;
