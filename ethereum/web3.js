import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in the browser, metamask has already injected web3
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server or user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
    );
  web3 = new Web3(provider);
}

export default web3;
