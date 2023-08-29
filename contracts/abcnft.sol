// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFTContract is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    string private _description;

    constructor(string memory name, string memory symbol, string memory description) ERC721(name, symbol) {
        _description = description;
    }

    function mintNFT(address to, string memory tokenURI) public onlyOwner returns (uint256) {
        _tokenIdCounter.increment();
        uint256 newTokenId = _tokenIdCounter.current();
        _mint(to, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        
        return newTokenId;
    }

    function updateDescription(string memory newDescription) public onlyOwner {
        _description = newDescription;
    }

    function getNFTDescription() public view returns (string memory) {
        return _description;
    }
}
