/** @type import('hardhat/config').HardhatUserConfig */
// https://eth-goerli.g.alchemy.com/v2/R9A636z_AX5t_eInfGbbycfTBA8Urxqt
// private key: 7cdf0749b8d9ab6886374ac4e03af81c6f6daf1ac7429e0a8be433168913d307

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/R9A636z_AX5t_eInfGbbycfTBA8Urxqt",
      accounts: [
        "7cdf0749b8d9ab6886374ac4e03af81c6f6daf1ac7429e0a8be433168913d307",
      ],
    },
  },
};
