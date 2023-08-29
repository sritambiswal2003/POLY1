require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.8.1",
  },
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/a72f479c5bde43e39e3fa15e646bf4b8",
      accounts: ['0c158ca8978bc73bad78ed67a9afe0c9b4a8b7baa1633b03b51edfa2c79003b8'],
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78",
      accounts: ['0c158ca8978bc73bad78ed67a9afe0c9b4a8b7baa1633b03b51edfa2c79003b8'],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/a72f479c5bde43e39e3fa15e646bf4b8",
      accounts: ['0c158ca8978bc73bad78ed67a9afe0c9b4a8b7baa1633b03b51edfa2c79003b8'],
    },
  },
};


