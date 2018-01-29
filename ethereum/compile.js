const path = require('path');
const solc = require('solc');
const fs = require('fs-extra'); // file system extra - commuity made

// gets reference to kickstarter-smartcontract-clone/ethereum/build
const buildPath = path.resolve(__dirname, 'build');

// delete referenced path
fs.removeSync(buildPath);

// find reference to campaign file
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

//  read contents of file at that path
const source = fs.readFileSync(campaignPath, 'utf8');

// compile contracts and extract them
const output = solc.compile(source, 1).contracts;

// create build dir
fs.ensureDirSync(buildPath);

// loop over output object
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract + '.json'),
    output[contract]
  );
}
