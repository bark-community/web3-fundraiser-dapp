require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.26",
  networks: {
    polygon: {
      url: process.env.REACT_APP_POLYGON_RPC_URL,
      accounts: { mnemonic: process.env.MNEMONIC_KEY },
    },
  },
};
