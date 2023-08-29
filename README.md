# Polygon Advanced Module 1

Welcome to the first project in the Polygon Advanced series. In this project, the main objectives are to deploy an NFT collection on the Ethereum blockchain, map the collection to the Polygon network, and successfully transfer assets via the Polygon Bridge.

## Getting Started

To run the project, follow these steps:

1. Download the entire repository to access all project contents.
2. Navigate to the `Poly_Proof` project directory.
3. Install the necessary dependencies by running:

```shell
npm install
```

4. After installing dependencies, execute the test file using the following command:

```shell
npx hardhat test
```

## Deploying the ERC721 Contract

Before deploying, ensure that you add your private key to the `accounts` variable in the `hardhat.config` file. Then, proceed with the deployment using the command:

```shell
npx hardhat run scripts/deploy.js --network sepolia
```

**Note:** After deployment, copy the generated contract address into `contractAddress.js` (found in the `metadata` folder) and also in `mintNFT.js` (located in the `scripts` folder).

The deployment script will deploy the contract and provide the contract address.

## Minting NFTs

To batch-mint NFTs using the deployed ERC721 contract, run the following command:

```shell
npx hardhat run scripts/mintNFT.js --network sepolia
```

The script will mint the specified number of NFTs and associate them with your address.

## Approving and Depositing NFTs to Polygon Mumbai

To approve and deposit the minted NFTs from Ethereum to the Polygon Mumbai network using the FxPortal Bridge, execute the following commands:

```shell
npx hardhat run scripts/sendNFT.js --network mumbai
```

## Author

This project was created by Sritam Biswal.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to make a copy of the project for your own use.

---

This regenerated version keeps the original content and structure while improving the readability and organization of the information.
