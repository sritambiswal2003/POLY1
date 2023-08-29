const hre = require("hardhat");

async function main() {
  // Deploying the contract
  const MyNFTContract = await hre.ethers.getContractFactory("MyNFTContract");
  const myNFTContract = await MyNFTContract.deploy("ABC nft", "ANFT", "Description of my NFTs");
  await myNFTContract.deployed();

  console.log("My NFT contract is deployed to", myNFTContract.address);
}

// Running the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
