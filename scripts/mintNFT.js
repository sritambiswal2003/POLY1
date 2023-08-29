const hre = require("hardhat");

async function main() {
  // Connect to the Goerli Ethereum Testnet
  const network = hre.network.name;
  console.log("Connected to network:", network);

  // Retrieve the deployed contract instance
  const MyNFTContract = await hre.ethers.getContractFactory("MyNFTContract");
  const myNFTContract = await MyNFTContract.attach("0x7DBdDd4EFA91861EE8b831b0397439cf6498d65F");
  console.log("Contract address:", myNFTContract.address);

  // Define the IPFS URLs for the NFTs
  const ipfsUrls = [
    "https://gateway.pinata.cloud/ipfs/QmVrxi3oqby1M6MsqGTf9m8vM8i5j94SZq1grMBVwYSV21",
    "https://gateway.pinata.cloud/ipfs/QmYWokvfj62MC9W11ePS3ZnPv95me2dTDhWkRvt8B81bu3",
    "https://gateway.pinata.cloud/ipfs/QmVwZYFT6C3byLJwYAsu4gVC9hej2DApGDCSFygb9Ssa9G",
    "https://gateway.pinata.cloud/ipfs/QmV3PfSv7f6vCz7cFczEzieXx2anvsajGFHnEd8hZpW1QH"
  ];

  // Batch mint all NFTs
  for (let i = 0; i < ipfsUrls.length; i++) {
    const recipient = await hre.ethers.provider.getSigner().getAddress();
    const tx = await myNFTContract.mintNFT(recipient, ipfsUrls[i]);
    const receipt = await tx.wait();
    const tokenId = receipt.events[0].args.tokenId;
    console.log(`Minted NFT with token ID ${tokenId}`);
  }
   
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });